import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import CommentBox from "./CommentBox";
import PhotoProfile from "./PhotoProfile";
import CommentBoxEdit from "./CommentBoxEdit";
import type { Reply } from "../types";

import iconMinus from '@assets/interactive-comments/images/icon-minus.svg';
import iconPlus from '@assets/interactive-comments/images/icon-plus.svg';
import iconEdit from '@assets/interactive-comments/images/icon-edit.svg';
import iconDelete from '@assets/interactive-comments/images/icon-delete.svg';
import iconReply from '@assets/interactive-comments/images/icon-reply.svg';
import { changeTypeOfTime } from "../utils/changeTypeOfTime";
import { useComment } from "../hooks/useComment";

interface ChatBoxProps {
  data: Reply;
}

export default function ChatBox({ data }: ChatBoxProps) {
  const { state, dispatch } = useComment();

  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [editedChatId, setEditedChatId] = useState<number | null>(null);

  const editHandler = (id: number) => {
    setEditBoxOpen(!editBoxOpen);
    setEditedChatId(id);
    if (replyBoxOpen) setReplyBoxOpen(false);
  };

  const handleUnrepliedClick = () => {
    alert("This feature will be configured in the future.");
  };

  const replyHandler = () => {
    setReplyBoxOpen(!replyBoxOpen);
    if (editBoxOpen) setEditBoxOpen(false);
  };

  const deleteChatHandler = (id: number) => {
    // Browser native confirmation popup
    const hasConfirmed = window.confirm("Are you sure you want to delete this comment? This will remove the comment and cannot be undone.");

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

  return (
    <div className="my-4 p-4 bg-white rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
      <div className="chat-box-wrapper">
        <div className="flex items-center gap-4 mb-2">
          <div className="photo-wrapper">
            <PhotoProfile username={data.user.username} imageUrl={data.user.image} />
          </div>
          <p className="font-bold m-0">{data.user.username}</p>
          <p className="text-[hsl(211,10%,45%)] m-0 text-sm">
            {changeTypeOfTime(data.createdAt)}
          </p>
        </div>

        <p className="text-[hsl(211,10%,45%)] leading-6 mb-4">
          {data.replyingTo && (
            <span className="font-bold text-[hsl(238,40%,52%)] mr-1">
              @{data.replyingTo}
            </span>
          )}
          {data.content}
        </p>

        <div className="flex justify-between items-center">
          <div className="p-2 flex items-center gap-4 bg-[hsl(223,19%,93%)] rounded-lg">
            <img
              src={iconMinus}
              alt="unvote"
              className="w-[15px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => handleVote(data.id, 'minus')}
            />
            <p className="font-bold text-[hsl(238,40%,52%)] m-0">{data.votedBy.length}</p>
            <img
              src={iconPlus}
              alt="vote"
              className="w-[15px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => handleVote(data.id, 'plus')}
            />
          </div>

          {state.currentUser.username === data.user.username ? (
            <div className="flex gap-4">
              <ButtonWithIcon
                image={iconDelete}
                text="Delete"
                onClick={() => deleteChatHandler(data.id)}
              />
              <ButtonWithIcon
                image={iconEdit}
                text="Edit"
                onClick={() => editHandler(data.id)}
              />
            </div>
          ) : (
            // 2. Check if the current 'data' object has a 'replies' property
            "replies" in data ? (
              <ButtonWithIcon
                image={iconReply}
                text="Reply"
                onClick={replyHandler}
              />
            ) : (
              <ButtonWithIcon
                image={iconReply} // You can use the same icon or a grayed out one
                text="Unreplied"
                onClick={handleUnrepliedClick}
              />
            )
          )}
        </div>
      </div>

      {editBoxOpen && (
        <div className="mt-4 pl-4 border-l-3 border-[hsl(239,57%,85%)]">
          <CommentBoxEdit
            id={editedChatId!}
          />
        </div>
      )}

      {replyBoxOpen && (
        <div className="mt-4 pl-4 border-l-3 border-[hsl(239,57%,85%)]">
          <CommentBox
            text="REPLY"
            parentId={data.id}
            replyingTo={data.user.username}
          />
        </div>
      )}
    </div>
  );
}