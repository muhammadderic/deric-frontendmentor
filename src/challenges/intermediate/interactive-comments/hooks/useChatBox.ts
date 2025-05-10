import { useState } from "react";

import { useComment } from "@challenges/intermediate/interactive-comments/hooks";

interface UseChatBoxProps {
  username: string;
}

export const useChatBox = ({ username }: UseChatBoxProps) => {
  const { state, dispatch } = useComment();
  
  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [editedChatId, setEditedChatId] = useState<number | null>(null);

  const editHandler = (id: number) => {
    setEditBoxOpen(!editBoxOpen);
    setEditedChatId(id);
    if (replyBoxOpen) setReplyBoxOpen(false);
  };

  const replyHandler = () => {
    setReplyBoxOpen(!replyBoxOpen);
    if (editBoxOpen) setEditBoxOpen(false);
  };

  const deleteChatHandler = (id: number) => {
    const hasConfirmed = window.confirm(
      "Are you sure you want to delete this comment? This will remove the comment and cannot be undone."
    );

    if (hasConfirmed) {
      dispatch({
        type: 'DELETE_COMMENT',
        payload: { id, username: state.currentUser.username }
      });
    }
  };

  const handleVote = (id: number, voteType: 'plus' | 'minus') => {
    dispatch({
      type: 'VOTE',
      payload: { id, voteType }
    });
  };

  const handleUnrepliedClick = () => {
    alert("This feature will be configured in the future.");
  };

  const closeEditBox = () => setEditBoxOpen(false);
  const closeReplyBox = () => setReplyBoxOpen(false);

  const isCurrentUser = state.currentUser.username === username;

  return {
    // State
    editBoxOpen,
    replyBoxOpen,
    editedChatId,
    isCurrentUser,
    
    // Handlers
    editHandler,
    replyHandler,
    deleteChatHandler,
    handleVote,
    handleUnrepliedClick,
    closeEditBox,
    closeReplyBox,
    
    // Dispatch and state from parent hook if needed
    dispatch,
    state
  };
};