import { createContext, useContext } from "react";

export type GlobalContent = {
  user: any,
  setUser:(c: any) => void
}

export const GdocsContext = createContext<GlobalContent>({
    user: 'Hello World', // set a default value
    setUser: () => {},
});

export const useGDocsContext = () => useContext(GdocsContext);