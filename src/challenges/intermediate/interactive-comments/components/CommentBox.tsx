import { useState } from "react";
import SubmitButton from "./SubmitButton";
import type { Comment } from "../types";
import { useComment } from "../hooks/useComment";

interface CommentBoxProps {
  text: string;
  parentId?: number | null;
  replyingTo?: string;
}

export default function CommentBox({ text, parentId = null, replyingTo }: CommentBoxProps) {
  const { state, dispatch } = useComment();
  const [commentText, setCommentText] = useState("");

  const sendHandler = () => {
    if (!commentText.trim()) return;

    const comments: Comment[] = JSON.parse(localStorage.getItem("comments") || "[]");

    const newComment: Comment = {
      "id": Date.now(),
      "content": commentText,
      "createdAt": Date.now(),
      "score": 0,
      "user": {
        "image": state.currentUser.image,
        "username": state.currentUser.username,
      },
      "replies": []
    };

    // Add replyingTo if it's a reply
    if (replyingTo) {
      newComment.replyingTo = replyingTo;
    }

    if (parentId) {
      // This is a reply to a comment
      comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, newComment]
          };
        }
        return comment;
      });
    } else {
      dispatch({ type: 'ADD_COMMENT', payload: newComment });
    }

    setCommentText(""); // Clear the textarea
  };

  return (
    <div className="my-4 p-4 bg-white rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] box-border">
      <textarea
        placeholder="Add a comment..."
        className="w-full h-[100px] mb-4 p-4 font-['Rubik',sans-serif] border border-[hsl(211,10%,45%)] rounded-lg box-border resize-none focus:outline-none focus:border-[hsl(238,40%,52%)]"
        onChange={e => setCommentText(e.target.value)}
        value={commentText}
      />
      <div className="flex justify-between items-center">
        <div className="photo-wrapper">
          <img
            src={state.currentUser.image}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <SubmitButton text={text} onClick={sendHandler} />
      </div>
    </div>
  );
}