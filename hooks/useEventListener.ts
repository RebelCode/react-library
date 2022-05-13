import {MutableRefObject, useEffect} from "react"

export type EventListener<E extends Event> = (e: E) => void;

/**
 * Hook for using an event listener on a node.
 *
 * @param subject The node to which to attach the event listener.
 * @param type The event type.
 * @param listener The listener function.
 * @param when Optional flags that control whe the listener is registered.
 * @param deps Options list of effect dependencies.
 */
export function useEventListener<E extends Event>(
    subject: EventTarget, type: string, listener: EventListener<E>, when: boolean[] = [], deps: any[] = [],
) {
    useEffect(() => {
        if (when.reduce((p, c) => p && c, true)) {
            subject.addEventListener(type, listener as any);
        }

        return () => subject.removeEventListener(type, listener as any);
    }, deps);
}

/**
 * Hook for using an event listener on the document.
 *
 * @param type The event type.
 * @param listener The listener function.
 * @param when Optional flags that control whe the listener is registered.
 * @param deps Options list of effect dependencies.
 */
export function useDocumentEventListener<E extends Event>(
    type: keyof DocumentEventMap | string, listener: EventListener<E>, when: Array<boolean> = [], deps: Array<any> = [],
) {
    useEventListener(document, type, listener, when, deps);
}

/**
 * Hook for using an event listener on the window.
 *
 * @param type The event type.
 * @param listener The listener function.
 * @param when Optional flags that control whe the listener is registered.
 * @param deps Options list of effect dependencies.
 */
export function useWindowEventListener<E extends Event>(
    type: keyof WindowEventMap, listener: EventListener<E>, when: Array<boolean> = [], deps: Array<any> = [],
) {
    useEventListener(window, type, listener, when, deps);
}

/**
 * Hook for using two event listeners: focus and blur.
 *
 * @param ref
 * @param callback
 */
export function useRefOnFocus<T extends HTMLElement>(ref: MutableRefObject<T>, callback: (focused: boolean) => void) {
    useEffect(() => {
        const onFocus = () => callback(true)
        const onBlur = () => callback(false)

        ref?.current?.addEventListener("focus", onFocus)
        ref?.current?.addEventListener("blur", onBlur)

        return () => {
            ref?.current?.removeEventListener("focus", onFocus)
            ref?.current?.removeEventListener("blur", onBlur)
        }
    }, [ref])
}
