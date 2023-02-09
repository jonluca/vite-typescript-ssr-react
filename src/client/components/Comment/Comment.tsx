import Avatar from "components/Avatar/Avatar";
import { _getPersonNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface CommentProps {
  date: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
}

const Comment: FC<CommentProps> = ({ date, content, user }) => {
  return (
    <div className="ttnc-Comment relative pb-8 border-b border-gray-300 dark:border-gray-700">
      <div className="flex space-x-8">
        <Avatar
          imgUrl={user.avatar}
          userName={user.name}
          sizeClass="w-12 h-12 lg:w-20 lg:h-20"
          radius="rounded-none"
        />
        <div>
          <div className="flex items-center mb-3 font-medium leading-tight">
            <a
              className="block text-gray-900 dark:text-gray-100 mr-3"
              href="@@"
            >
              {_getPersonNameRd()}
            </a>
            <span className="block text-xs text-gray-600 dark:text-gray-300 uppercase font-normal underline border-gray-400">
              {date}
            </span>
          </div>
          <div className="mb-3 text-sm font-LibreFranklin text-gray-700 dark:text-gray-300">
            <span>{content}</span>
          </div>
          <a
            href="#root"
            className="text-xl text-gray-800 dark:text-gray-200 flex items-center font-medium uppercase"
          >
            <i className="pe-7s-repeat"></i>
            <span className="ml-2 leading-none tracking-wider text-sm">
              Reply
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
