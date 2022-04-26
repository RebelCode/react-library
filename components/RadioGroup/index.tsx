import React, {ChangeEvent} from "react";
// import "../../styles/fields.pcss";
import css from "./RadioGroup.pcss";

export type RadioOption = {
    value: string | number,
    label: string
}

type Props = {
    name?: string;
    className?: string;
    value: string | number;
    onChange?: (value: any) => void;
    options: Array<RadioOption>;
    disabled?: boolean;
}

export function RadioGroup({name, className, disabled, value, onChange, options}: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        (!disabled && e.target.checked && onChange) && onChange(e.target.value);
    };

    className = (disabled ? css.disabled : css.radioGroup) + " " + (className ?? "");

    return (
        <div className={className}>
            {
                options.map((option, idx) => (
                    <label className={css.option} key={idx}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={handleChange}
                        />
                        <span>{option.label}</span>
                    </label>
                ))
            }
        </div>
    );
}
