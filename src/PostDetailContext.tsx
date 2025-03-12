import React, { createContext, useState, ReactNode } from 'react';
import { Post } from './component/Post';

interface PostDetailContextType {
  postDetail: Post | null;
  setPostDetail: React.Dispatch<React.SetStateAction<Post | null>>;
}

export const PostDetailContext = createContext<PostDetailContextType>({
  postDetail: null,
  setPostDetail: () => {},
});

export const PostDetailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [postDetail, setPostDetail] = useState<Post | null>(null);
  return (
    <PostDetailContext.Provider value={{ postDetail, setPostDetail }}>
      {children}
    </PostDetailContext.Provider>
  );
};