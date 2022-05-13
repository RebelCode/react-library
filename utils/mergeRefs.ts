import { Ref, RefObject } from "react";

export function mergeRefs(...refs: Ref<any>[]) {
    return (el: any) => {
        refs.forEach((ref) => ref && setRef(ref, el));
    };
}

function setRef(ref: ((instance: any) => void) | RefObject<any>, el: any) {
    if (typeof ref === "function") {
        ref(el);
    } else {
        (ref as any).current = el;
    }
}
