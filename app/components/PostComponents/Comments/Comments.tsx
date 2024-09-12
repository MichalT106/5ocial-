import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Card/Card";
import ProfileLetter from "../../ProfilePicture/ProfileLetter";
import Line from "../../Line/Line";
import Like from "../Like";

type comment = {
  commentId: string;
  username: string | null;
  content: string;
  userId: string;
  postId: string;
};

const Comments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/feed/comments?postId=${postId}`
        );
        const allComments = res.data.allComments;

        setComments(allComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, [postId, comments]);

  return (
    <div className="flex gap-2 flex-col-reverse w-full">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.commentId}>
            <Card>
              <div className="mt-1">
                <div className="flex gap-3 h-max justify-start">
                  <ProfileLetter>
                    {comment.username ? comment.username[0].toUpperCase() : ""}
                  </ProfileLetter>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-lg">{comment.username}</p>
                    <p>{comment.content}</p>
                  </div>
                </div>
                <Line />
                {/* <PostAction
                  postId={comment.commentId}
                /> */}
                <Like postId={postId} comment={comment}></Like>
              </div>
            </Card>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;