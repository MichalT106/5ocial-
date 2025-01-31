import React from "react";

const LikeIcon = ({
  like,
  likeCount,
}: {
  like: boolean;
  likeCount: number;
}) => {
  return (
    <div className="bg-transparent hover:bg-[rgba(249,24,129,0.13)] p-1.5 rounded-full flex justify-center items-center gap-1 group">
      {like ? (
        <div className="flex justify-center items-center gap-1 flex-col md:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 48 48"
          >
            <path
              fill="rgb(249, 24, 128)"
              stroke="rgb(249, 24, 128)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
            />
          </svg>
          <div className="w-6 text-xs text-[rgb(249,24,129)] font-bold">
            {likeCount}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-1 flex-col md:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 48 48"
            className="stroke-[#3F454B] group-hover:stroke-[rgb(249,24,129)]"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
            />
          </svg>
          <div className="w-6 text-xs font-bold">{likeCount}</div>
        </div>
      )}
    </div>
  );
};

export default LikeIcon;
