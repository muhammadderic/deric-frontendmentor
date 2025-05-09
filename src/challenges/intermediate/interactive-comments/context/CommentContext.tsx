import React, { createContext, useReducer, type ReactNode } from 'react';
import type { CommentState, CommentAction } from '../types';
import { commentReducer, getInitialCommentState } from './commentReducer';

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