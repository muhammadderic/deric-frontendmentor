import { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";
import type { Comment } from "../types";

interface CommentBoxEditProps {
  id: number;
  onEditComplete?: () => void;
}

export default function CommentBoxEdit({ id, onEditComplete }: CommentBoxEditProps) {
  const [commentText, setCommentText] = useState("");
  const [commentId, setCommentId] = useState<number | null>(null);

  useEffect(() => {
    const comments: Comment[] = JSON.parse(localStorage.getItem("comments") || "[]");
    const foundComment = comments.find(comment => comment.id === id);

    if (foundComment) {
      setCommentText(foundComment.content);
      setCommentId(foundComment.id);
    }
  }, [id]);

  const editHandler = () => {
    if (!commentId) return;

    let comments: Comment[] = JSON.parse(localStorage.getItem("comments") || "[]");

    const commentForm: Comment = {
      "id": commentId,
      "content": commentText,
      "createdAt": Date.now(),
      "votedBy": [],
      "user": {
        "image": "",
        "username": "",
      },
      "replies": []
    };

    comments = comments.filter(comment => comment.id !== commentId);
    comments.push(commentForm);

    if (onEditComplete) {
      onEditComplete();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="my-4 p-4 bg-white rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] box-border">
      <textarea
        className="w-full h-[100px] mb-4 p-4 font-['Rubik',sans-serif] border border-[hsl(211,10%,45%)] rounded-lg box-border resize-none focus:outline-none focus:border-[hsl(238,40%,52%)]"
        onChange={e => setCommentText(e.target.value)}
        value={commentText}
        placeholder="Edit your comment..."
      />
      <div className="flex justify-between items-center">
        <div className="photo-wrapper">
          <img
            src="/images/avatars/image-ramsesmiron.png"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <SubmitButton text="EDIT" onClick={editHandler} />
      </div>
    </div>
  );
}