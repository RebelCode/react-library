import React from "react";

type Props = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
}

export function TextArea({id, value, onChange}: Props) {
    return (
        <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
