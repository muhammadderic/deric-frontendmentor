import React, {
  createContext,
  useReducer,
  type ReactNode
} from 'react';

import type {
  CommentState,
  CommentAction
} from '@challenges/intermediate/interactive-comments/types';
import {
  commentReducer,
  getInitialCommentState
} from '@challenges/intermediate/interactive-comments/context/commentReducer';

// Context type definition
interface CommentContextType {
  state: CommentState;
  dispatch: React.Dispatch<CommentAction>;
}

// Create context with undefined default value
export const CommentContext = createContext<CommentContextType | undefined>(undefined);

// Provider component
interface CommentProviderProps {
  children: ReactNode;
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [state, dispatch] = useReducer(
    commentReducer,
    getInitialCommentState()
  );

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};