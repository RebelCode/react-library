import React from "react";
// import "../../styles/fields.pcss";
import "./TextArea.pcss"

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
