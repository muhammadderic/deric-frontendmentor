import type { CommentState, CommentAction } from '../types';
import { data } from '../constants/data';

// Initial state factory
export const getInitialCommentState = (): CommentState => ({
  comments: data.comments,
  currentUser: {
    username: data.currentUser.username,
    image: data.currentUser.image.png
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

    default:
      return state;
  }
};