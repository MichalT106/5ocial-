"use client";
import React from "react";
import Like from "./Like";
import Comment from "./Comments/Comment";
import Follow from "./Follow";
import { useSession } from "next-auth/react";
type Post = {
  username: string | null | undefined;
  postId: string;
  content: string;
  date: string;
  imageUrl: string | null;
  userId: string;
  options: { optionId: string; text: string; postId: string }[];
};

type comment = {
  commentId: string;
  username: string | null;
  content: string;
  userId: string;
  postId: string;
};
const PostAction = ({
  postId,
  followingId,
  post,
  comment,
}: {
  postId?: string;
  followingId?: string;
  post?: Post;
  comment?: comment;
}) => {
  const session = useSession();
  const userId = session.data?.user?.id;
  return (
    <div className="w-full  flex  justify-between items-center">
      <Comment post={post} comment={comment} userId={userId}></Comment>
      <Like postId={postId} comment={comment} userId={userId}></Like>
      <Follow
        postId={postId}
        followingId={followingId}
        userId={userId}
      ></Follow>
    </div>
  );
};

export default React.memo(PostAction);
