// User interface
export interface User {
  image: string;
  username: string;
}

// Reply interface (extends Comment but with optional replyingTo)
export interface Reply extends Omit<Comment, 'replies'> {
  replyingTo?: string;
  replies?: Reply[]; // Nested replies support
}

// Main Comment interface
export interface Comment {
  id: number;
  content: string;
  createdAt: string | number; // Can be either string (like "1 month ago") or timestamp
  votedBy: { username: string }[];
  user: User;
  replies: Reply[];
  replyingTo?: string; // Optional for top-level comments
}

// Type for the comments array
export type CommentsArray = Comment[];

// Contexts:
export interface CommentState {
  comments: Comment[];
  currentUser: User;
}

export type CommentAction =
  | { type: 'ADD_COMMENT'; payload: Comment }
  | { type: 'ADD_REPLY'; payload: { commentId: number; reply: Reply } }
  | { type: 'DELETE_COMMENT'; payload: { id: number; username: string } }
  | { type: 'VOTE'; payload: { id: number; voteType: 'plus' | 'minus' } };