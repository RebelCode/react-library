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
            data-testid="textarea"
            aria-label="TextArea"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
