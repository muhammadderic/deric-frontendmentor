import { useState } from "react";
import SubmitButton from "./SubmitButton";
import ramsesmironPng from '@assets/interactive-comments/images/avatars/image-ramsesmiron.png';

interface CommentBoxProps {
  text: string;
  parentId?: number | null;
  replyingTo?: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  user: {
    username: string;
  };
  replies: Reply[];
  replyingTo?: string;
}

interface Reply {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  user: {
    username: string;
  };
  replyingTo?: string;
  replies?: Reply[];
}

export default function CommentBox({ text, parentId = null, replyingTo }: CommentBoxProps) {
  const [commentText, setCommentText] = useState("");

  const sendHandler = () => {
    if (!commentText.trim()) return;

    const comments: Comment[] = JSON.parse(localStorage.getItem("comments") || "[]");

    const newComment: Comment = {
      "id": Date.now(), // Use timestamp for unique ID instead of array length
      "content": commentText,
      "createdAt": Date.now(),
      "score": 0,
      "user": {
        "username": "",
      },
      "replies": []
    };

    // Add replyingTo if it's a reply
    if (replyingTo) {
      newComment.replyingTo = replyingTo;
    }

    if (parentId) {
      // This is a reply to a comment
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, newComment]
          };
        }
        return comment;
      });
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    } else {
      // This is a new top-level comment
      comments.push(newComment);
      localStorage.setItem("comments", JSON.stringify(comments));
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
            src={ramsesmironPng}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <SubmitButton text={text} onClick={sendHandler} />
      </div>
    </div>
  );
}