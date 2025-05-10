import type { 
  CommentState, 
  CommentAction 
} from '@challenges/intermediate/interactive-comments/types';
import { data } from '@challenges/intermediate/interactive-comments/constants/data';

// Initial state factory
export const getInitialCommentState = (): CommentState => ({
  comments: data.comments,
  currentUser: {
    username: data.currentUser.username,
    image: data.currentUser.image
  }
});

export const commentReducer = (
  state: CommentState, 
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case 'ADD_REPLY':
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              replies: [...comment.replies, action.payload.reply],
            };
          }
          return comment;
        }),
      };

    case 'EDIT_COMMENT': {
      const { id, content } = action.payload;
      const currentUsername = state.currentUser.username;

      const updateContent = <T extends { id: number; content: string; user: { username: string } }>(
        item: T
      ): T => {
        if (item.id !== id) return item;
        
        // Optional: Check if user is the author
        if (item.user.username !== currentUsername) return item;
        
        return {
          ...item,
          content: content
        };
      };

      return {
        ...state,
        comments: state.comments.map(comment => {
          const updatedComment = updateContent(comment);
          return {
            ...updatedComment,
            replies: updatedComment.replies.map(reply => updateContent(reply))
          };
        }),
      };
    }

    case 'DELETE_COMMENT':
      return {
        ...state,
        // Filter top-level comments AND filter replies within each comment
        comments: state.comments
          .filter((c) => !(c.id === action.payload.id && c.user.username === action.payload.username))
          .map((c) => ({
            ...c,
            replies: c.replies.filter(
              (r) => !(r.id === action.payload.id && r.user.username === action.payload.username)
            ),
          })),
      };

    case 'VOTE': {
      const { id, voteType } = action.payload;
      const currentUsername = state.currentUser.username;

      const updateVote = <T extends { id: number; votedBy: { username: string }[] }>(
        item: T
      ): T => {
        if (item.id !== id) return item;

        const hasVoted = item.votedBy.some(v => v.username === currentUsername);
        
        if (voteType === 'plus') {
          // Plus: only add if not already voted
          if (!hasVoted) {
            return {
              ...item,
              votedBy: [...item.votedBy, { username: currentUsername }]
            };
          }
        } else if (voteType === 'minus') {
          // Minus: only remove if already voted
          if (hasVoted) {
            return {
              ...item,
              votedBy: item.votedBy.filter(v => v.username !== currentUsername)
            };
          }
        }
        
        // No change if conditions aren't met
        return item;
      };

      return {
        ...state,
        comments: state.comments.map(comment => {
          const updatedComment = updateVote(comment);
          return {
            ...updatedComment,
            replies: updatedComment.replies.map(reply => updateVote(reply))
          };
        }),
      };
    }

    default:
      return state;
  }
};