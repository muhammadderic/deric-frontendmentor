// ChatBox.tsx (refactored component)
import type { Reply } from "@challenges/intermediate/interactive-comments/types";
import {
  ButtonWithIcon,
  CommentBox,
  PhotoProfile,
  CommentBoxEdit
} from "@challenges/intermediate/interactive-comments/components";
import { changeTypeOfTime } from "@challenges/intermediate/interactive-comments/utils/changeTypeOfTime";
import { useChatBox } from "@challenges/intermediate/interactive-comments/hooks";

import iconMinus from '@assets/interactive-comments/images/icon-minus.svg';
import iconPlus from '@assets/interactive-comments/images/icon-plus.svg';
import iconEdit from '@assets/interactive-comments/images/icon-edit.svg';
import iconDelete from '@assets/interactive-comments/images/icon-delete.svg';
import iconReply from '@assets/interactive-comments/images/icon-reply.svg';

interface ChatBoxProps {
  data: Reply;
}

export function ChatBox({ data }: ChatBoxProps) {
  const {
    editBoxOpen,
    replyBoxOpen,
    editedChatId,
    isCurrentUser,
    editHandler,
    replyHandler,
    deleteChatHandler,
    handleVote,
    handleUnrepliedClick
  } = useChatBox({
    username: data.user.username
  });

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

          {isCurrentUser ? (
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
            "replies" in data ? (
              <ButtonWithIcon
                image={iconReply}
                text="Reply"
                onClick={replyHandler}
              />
            ) : (
              <ButtonWithIcon
                image={iconReply}
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