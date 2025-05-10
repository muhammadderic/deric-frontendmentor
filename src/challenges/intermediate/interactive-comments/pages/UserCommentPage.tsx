import {
  BackButton,
  MDericAttribution
} from "@shared/components";
import { CommentProvider } from "@challenges/intermediate/interactive-comments/context/CommentContext";
import CommentPage from "@challenges/intermediate/interactive-comments/pages/CommentPage";

function UserCommentPage() {
  return (
    <CommentProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4">
        <div>
          <BackButton to="/" />
        </div>

        <CommentPage />

        {/* Attribution */}
        <MDericAttribution />
      </div>
    </CommentProvider>
  );
}

export default UserCommentPage;
