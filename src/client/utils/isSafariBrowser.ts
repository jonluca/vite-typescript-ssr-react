const isSafariBrowser = () => {
  return (
    navigator.userAgent.indexOf("Safari") > -1 &&
    navigator.userAgent.indexOf("Chrome") <= -1
  );
};

export default isSafariBrowser;
