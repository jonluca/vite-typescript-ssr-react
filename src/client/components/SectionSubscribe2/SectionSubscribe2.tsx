import React, { FC, useRef, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import rightImg from "images/SVG-subcribe2.png";
import NcImage from "components/NcImage/NcImage";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";
import Snackbar from '@mui/material/Snackbar';
import supabaseClient from "utils/supabaseClient";
import { useGlobalContext } from 'utils/context';

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const { author } = useGlobalContext();

  const subEmail = useRef<any>(null);

  const [btnLoading, setbtnLoading] = useState<any>(false);
  const [snackStatus, setsnackStatus] = useState<any>(false);
  const [snackMsg, setsnackMsg] = useState<any>("");

  const setSnack = (msg: any) => { 
    setsnackMsg(msg);
    setsnackStatus(true);
    setbtnLoading(false);
    setTimeout(() => {
      setsnackStatus(false);
    }, 3000);
  }

  const subscribe = async (e:any) => { 
    e.preventDefault(); 
    setbtnLoading(true);
    console.log(author[0].id);
    const emailS = subEmail.current.value;

    if(emailS === ""){
      setSnack("Please fill your Email")
    } else {
      const subData:any = await supabaseClient
      .from('newsletter')
      .select("email")
      .eq('email', emailS)
      .eq('author', author[0].id)

      if(subData.error) {
        setSnack(subData.error.message)
      }
      console.log(subData.data);
      if(subData.data.length > 0) {
        setSnack("You are already subscribed")
      } else { 

        const { data, error } = await supabaseClient
        .from('newsletter')
        .insert([
          { email: emailS, author: author[0].id },
        ])
  
        if(error){
          setSnack(error.message);
        } 
        if(data) { 
          setSnack("Subscribed successfully. You will receive an email from author shortly.");
        }
      }

    }

  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setsnackStatus(false);
  };

  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <section className="dark:bg-neutral-1000">
        <div className="px-4 mx-auto max-w-screen lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">{author[0].newsletterC[0]['title']}</h2>
                <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">{author[0].newsletterC[0]['subtitle']}</p>
                <form onSubmit={subscribe}>
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <p className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</p>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <Input
                              ref={subEmail}
                              required
                              aria-required
                              className="h-12 block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border sm:rounded-none sm:rounded-l-lg dark:bg-gray-50 dark:text-gray-900" 
                              placeholder="Enter your Email"
                              type="text"
                            />
                        </div>
                        <div>
                            <ButtonPrimary loading={btnLoading} className="h-12 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                              type="submit"
                            >
                              Subscribe
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </section>
      {/* <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Join our newsletter 🎉</h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <form onSubmit={subscribe} className="mt-10 relative max-w-sm">
          <div className="flex flex-row items-center space-x-4 mb-5">
            <Badge name="01" />
            <Input
              ref={subName}
              required
              aria-required
              placeholder="Enter your Name"
              type="text"
            />
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Badge color="red" name="02" />
            <Input
              ref={subEmail}
              required
              aria-required
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <ButtonPrimary loading={btnLoading} className="mt-10 h-10 w-full"
            type="submit"
          >
            Submit
          </ButtonPrimary>
        </form>
      </div> */}
      {/* <div className="flex-grow">
        <NcImage src={rightImg} />
      </div> */}
      <Snackbar
        open={snackStatus}
        onClose={handleClose}
        message={snackMsg}
      />
    </div>
  );
};

export default SectionSubscribe2;
