import { useEffect } from "react";

const defaultTitle = import.meta.env.VITE_APP_TITLE ?? "MiToA";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ?? defaultTitle;
  }, [title]);
}
