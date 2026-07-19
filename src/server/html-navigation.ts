import path from "path";

export function isHtmlNavigationRequest(method: string, pathname: string, acceptHeader: string | undefined) {
  if (method !== "GET" && method !== "HEAD") {
    return false;
  }

  if (path.posix.extname(pathname)) {
    return false;
  }

  return (
    acceptHeader
      ?.toLowerCase()
      .split(",")
      .some(value => {
        const [mediaType, ...parameters] = value.split(";").map(part => part.trim());
        const qualityParameter = parameters.find(parameter => parameter.startsWith("q="));
        const quality = qualityParameter ? Number(qualityParameter.slice(2)) : 1;
        return mediaType === "text/html" && Number.isFinite(quality) && quality > 0;
      }) ?? false
  );
}
