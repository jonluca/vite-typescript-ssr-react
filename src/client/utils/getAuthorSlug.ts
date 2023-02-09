const getAuthorSlug = () => {
  const location = typeof window !== "undefined" ? window.location.hostname.split(".")[0] : 'null';
  const url = import.meta.env.VITE_URL;

  console.log(location);

  const authorSlug =
    location != url
      ? location == "9b8tyl-3000"
        ? "hrithik"
        : location
      : "hrithik";

  return authorSlug;
};

export default getAuthorSlug;
