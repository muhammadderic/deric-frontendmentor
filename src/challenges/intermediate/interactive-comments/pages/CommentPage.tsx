import Chats from "../components/Chats";
import CommentBox from "../components/CommentBox";
import { useComment } from "../hooks/useComment";

export default function CommentPage() {
  const { state } = useComment();

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