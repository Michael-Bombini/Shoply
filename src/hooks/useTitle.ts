import { useEffect } from "react";

function useTitle(title?: string, defaultTitle: string = "Shoply - Your Place to Shop") {
  useEffect(() => {
    const newTitle = title?.replace("-", " ")
    document.title = newTitle ? newTitle : defaultTitle;

    return () => {
      document.title = defaultTitle;
    };
  }, [title]);
}

export default useTitle;
