import React from "react";
export interface MessageProps {
  type?: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}
const Message: React.FC<MessageProps> = ({
  children = "This is a SUCCESS message",
  type = "success",
}) => {
  let color = "";
  switch (type) {
    case "success":
      color += " text-status-success bg-status-successBg";
      break;
    case "error":
      color += " text-status-error bg-status-errorBg";
      break;
    case "warning":
      color += " text-status-warning bg-status-warningBg";
      break;
    case "info":
      color += " text-status-info bg-status-infoBg";
      break;
    default:
      break;
  }
  return (
    <div className={`${color} flex px-4 py-2 text-paragraph-small`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-2 mt-2px w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </div>
  );
};

export default Message;
