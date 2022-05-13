import {MouseEvent, MutableRefObject, RefObject, useEffect} from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useDetectOutsideClick<T extends HTMLElement>(ref: MutableRefObject<T>, callback: (e: MouseEvent) => void, ignore: RefObject<Element>[] = [], deps: any[] = []) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent<Element, globalThis.MouseEvent>) {
        if (ref.current &&
            !ref.current.contains(event.target as Node) &&
            !ignore.some(ref => ref?.current?.contains(event.target as Node))
        ) {
            callback(event);
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside as any);
        document.addEventListener("touchend", handleClickOutside as any);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside as any);
            document.removeEventListener("touchend", handleClickOutside as any);
        };
    }, deps);
}
