import React, { FC } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";

export interface SectionSubscribeProps {
  className?: string;
}

const SectionSubscribe: FC<SectionSubscribeProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe relative bg-primary-100 dark:bg-neutral-800 bg-opacity-30 dark:bg-opacity-30 ${className}`}
      data-nc-id="SectionSubscribe"
    >
      <div className="container py-10 lg:py-16">
        <div className="flex flex-col items-center justify-center w-screen mx-auto max-w-full text-center lg:max-w-screen-md">
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-[112.5%] text-neutral-900 dark:text-neutral-100">
              📬 Subcribe to our newsletter
            </h2>
            <span className="block mt-4 text-base md:text-lg text-neutral-6000 dark:text-neutral-400">
              Sign up for our newsletter and we'll email you every time we
              release a new of article.
            </span>
          </div>
          <div className="mt-10 w-full">
            <form
              className="flex flex-col justify-center space-y-2.5 sm:space-y-0 sm:space-x-2.5 sm:flex-row"
              action="#"
              method="POST"
            >
              <Input
                className="sm:max-w-sm flex-grow"
                placeholder="Enter email address"
                sizeClass="h-auto px-4 py-3"
              />
              <ButtonPrimary className="flex-shrink-0" type="submit">
                Subscribe
              </ButtonPrimary>
            </form>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-2.5">
              We care about the protection of your data. Read our{" "}
              <a
                className="text-primary-700 dark:text-primary-6000 font-medium"
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy.
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSubscribe;
