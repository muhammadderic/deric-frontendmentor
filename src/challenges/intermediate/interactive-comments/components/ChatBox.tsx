import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import CommentBox from "./CommentBox";
import PhotoProfile from "./PhotoProfile";
import CommentBoxEdit from "./CommentBoxEdit";
import type { Reply } from "../types";

import iconMinus from '@assets/interactive-comments/images/icon-minus.svg';
import iconPlus from '@assets/interactive-comments/images/icon-plus.svg';

interface ChatBoxProps {
  data: Reply;
  isReply?: boolean;
}

export default function ChatBox({ data, isReply = false }: ChatBoxProps) {
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
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");

    if (isReply) {
      // Handle reply deletion - need to find parent and remove from replies
      // const allComments = JSON.parse(localStorage.getItem("allComments") || localStorage.getItem("comments") || "[]");
      // This logic depends on your data structure
      // For now, using simple filter for top-level
      const commentsFiltered = comments.filter((comment: any) => comment.id !== id);
      localStorage.setItem("comments", JSON.stringify(commentsFiltered));
    } else {
      const commentsFiltered = comments.filter((comment: any) => comment.id !== id);
      localStorage.setItem("comments", JSON.stringify(commentsFiltered));
    }
  };

  const handleVote = (voteType: 'plus' | 'minus') => {
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");

    const updatedComments = comments.map((comment: any) => {
      if (comment.id === data.id) {
        return {
          ...comment,
          score: voteType === 'plus' ? comment.score + 1 : comment.score - 1
        };
      }
      return comment;
    });

    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleEditComplete = () => {
    setEditBoxOpen(false);
  };

  return (
    <div className="my-4 p-4 bg-white rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
      <div className="chat-box-wrapper">
        <div className="flex items-center gap-4 mb-2">
          <div className="photo-wrapper">
            <PhotoProfile username={data.user.username} imageUrl={data.user.image} />
          </div>
          <p className="font-bold m-0">{data.user.username}</p>
          {/* <p className="text-[hsl(211,10%,45%)] m-0 text-sm">
            {changeTypeOfTime(data.createdAt)}
          </p> */}
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
              onClick={() => handleVote('minus')}
            />
            <p className="font-bold text-[hsl(238,40%,52%)] m-0">{data.score}</p>
            <img
              src={iconPlus}
              alt="vote"
              className="w-[15px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => handleVote('plus')}
            />
          </div>

          {/* TODO: Change username to be real username */}
          {"username" === data.user.username ? (
            <div className="flex gap-4">
              <ButtonWithIcon
                filename="icon-delete"
                text="Delete"
                onClick={() => deleteChatHandler(data.id)}
              />
              <ButtonWithIcon
                filename="icon-edit"
                text="Edit"
                onClick={() => editHandler(data.id)}
              />
            </div>
          ) : (
            <ButtonWithIcon
              filename="icon-reply"
              text="Reply"
              onClick={replyHandler}
            />
          )}
        </div>
      </div>

      {editBoxOpen && (
        <div className="mt-4 pl-4 border-l-3 border-[hsl(239,57%,85%)]">
          <CommentBoxEdit
            id={editedChatId!}
            onEditComplete={handleEditComplete}
          />
        </div>
      )}

      {replyBoxOpen && (
        <div className="mt-4 pl-4 border-l-3 border-[hsl(239,57%,85%)]">
          <CommentBox
            text="REPLY"
            parentId={data.id}
            replyingTo={data.user.username}
          // onSendComplete={handleReplyComplete}
          />
        </div>
      )}
    </div>
  );
}