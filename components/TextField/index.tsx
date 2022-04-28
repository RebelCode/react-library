import React from "react";
// import "../../styles/fields.pcss";

type Props = {
    id?: string;
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export function TextField({id, value, onChange, placeholder}: Props) {
    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            data-testid="textfield"
            placeholder={placeholder}
        />
    );
}
