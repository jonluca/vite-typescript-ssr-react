import { Popover, Transition } from "@headlessui/react";
import Input from "components/Input/Input";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchDropdown = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const history = useNavigate();

  return (
    <React.Fragment>
      <Popover>
        {({ open, close }) => {
          if (open) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }

          return (
            <>
              <Popover.Button className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                <i className="las la-search"></i>
              </Popover.Button>
              <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute right-0 mt-2 items-center lg:mt-0 z-10 w-screen max-w-sm mt-3"
                >
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if(inputRef.current?.value) { 
                      close();
                      navigate(`/search?${inputRef.current?.value}`);
                    }
                  }} className="relative">
                    <i className="las la-search absolute left-3 top-1/2 transform -translate-y-1/2 text-xl opacity-60"></i>
                    <Input
                      ref={inputRef}
                      type="search"
                      placeholder="Type and press enter"
                      className="pl-10"
                    />
                    <input type="submit" hidden value="" />
                  </form>
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default SearchDropdown;
