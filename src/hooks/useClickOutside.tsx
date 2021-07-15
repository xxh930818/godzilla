import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}
export function useClickOutside2(
  ref1: RefObject<HTMLElement>,
  ref2: RefObject<HTMLElement>,
  handler: Function
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref1.current || ref1.current.contains(event.target as HTMLElement)) {
        return;
      }
      if (!ref2.current || ref2.current.contains(event.target as HTMLElement)) {
        return;
      }
      if (handler) {
        handler(event);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref1, ref2, handler]);
}
export default useClickOutside;
