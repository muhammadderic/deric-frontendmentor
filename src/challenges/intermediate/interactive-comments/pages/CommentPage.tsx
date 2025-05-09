import Chats from "../components/Chats";
import CommentBox from "../components/CommentBox";
import { useCommentState } from "../hooks/useComment";

export default function CommentPage() {
  const state = useCommentState();

  return (
    <div className="min-h-screen bg-[hsl(228,33%,97%)] py-8">
      <div className="max-w-3xl mx-auto px-4">
        {state.comments.map(comment => (
          <Chats key={comment.id} data={comment} />
        ))}
        <CommentBox text="SEND" />
      </div>
    </div>
  );
}