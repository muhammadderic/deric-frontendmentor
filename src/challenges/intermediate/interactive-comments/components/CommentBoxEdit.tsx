import { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import { useComment } from '../hooks/useComment';

interface CommentBoxEditProps {
  id: number;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export default function CommentBoxEdit({ id, onCancel, onSuccess }: CommentBoxEditProps) {
  const { state, dispatch } = useComment();
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Find comment in both top-level comments and replies
    const findComment = () => {
      // Check top-level comments
      const topLevelComment = state.comments.find(comment => comment.id === id);
      if (topLevelComment) {
        setCommentText(topLevelComment.content);
        return;
      }

      // Check replies
      for (const comment of state.comments) {
        const reply = comment.replies.find(reply => reply.id === id);
        if (reply) {
          setCommentText(reply.content);
          return;
        }
      }
    };

    findComment();
  }, [id, state.comments]);

  const editHandler = () => {
    if (!commentText.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    if (commentText.length > 500) {
      setError("Comment cannot exceed 500 characters");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      dispatch({
        type: 'EDIT_COMMENT',
        payload: {
          id: id,
          content: commentText.trim()
        }
      });

      // Call success callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError("Failed to edit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape' && onCancel) {
      onCancel();
    }
    // Optional: Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      editHandler();
    }
  };

  return (
    <div className="my-4 p-4 bg-white rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] box-border">
      <textarea
        className={`w-full h-[100px] mb-4 p-4 font-['Rubik',sans-serif] border rounded-lg box-border resize-none focus:outline-none focus:border-[hsl(238,40%,52%)] ${error ? 'border-red-500' : 'border-[hsl(211,10%,45%)]'
          }`}
        onChange={e => setCommentText(e.target.value)}
        value={commentText}
        placeholder="Edit your comment..."
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
        autoFocus
      />
      {error && (
        <div className="text-red-500 text-sm mb-3">
          {error}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="photo-wrapper">
          <img
            src={state.currentUser.image}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex gap-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
          <SubmitButton
            text="EDIT"
            onClick={editHandler}
          />
        </div>
      </div>
    </div>
  );
}