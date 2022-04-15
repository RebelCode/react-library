import React, {KeyboardEvent, ReactElement, useEffect} from "react";
import CreatableSelect from "react-select";
import {Alert} from "../Alert";
import {SelectStyles} from "../Select";

const components = {
    DropdownIndicator: null,
};

const createOption = (label: string) => ({
    label,
    value: label,
});

export type Props = {
    id?: string;
    value: Array<string>;
    onChange?: (value: Array<string>) => void;
    sanitize?: (value: string) => string;
    autoFocus?: boolean;
    message?: string | ReactElement;
}

export function ListField({id, value, onChange, sanitize, autoFocus, message}: Props) {
    const [inputValue, setInputValue] = React.useState("");
    const [duplicate, setDuplicate] = React.useState(-1);
    const [currMessage, setCurrMessage] = React.useState<string | ReactElement>();

    useEffect(() => {
        setCurrMessage(message);
    }, [message]);

    value = Array.isArray(value) ? value : [];
    const values = value.map((v) => createOption(v));

    const addValue = () => {
        if (inputValue.length) {
            setInputValue("");
            handleChange([...values, createOption(inputValue)]);
        }
    };

    const handleChange = (value: any) => {
        if (!onChange) return;

        let dupeIdx = -1;

        if (!value) {
            value = [];
        } else {
            value = value
                .map((opt) => (opt && sanitize) ? sanitize(opt.value) : opt.value)
                .filter((val, idx, list) => {
                    const firstIndex = list.indexOf(val);

                    if (firstIndex !== idx) {
                        dupeIdx = firstIndex;

                        return false;
                    }

                    return !!val;
                });
        }

        setDuplicate(dupeIdx);

        if (dupeIdx === -1) {
            onChange(value);
        }
    };

    const handleInputChange = (inputValue: string) => {
        setInputValue(inputValue);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (!inputValue) return;

        switch (event.key) {
            case ",":
            case "Enter":
            case "Tab":
                addValue();
                event.preventDefault();
                break;
        }
    };

    const styles = SelectStyles();

    return (
        <>
            <CreatableSelect
                inputId={id}
                className="react-select"
                classNamePrefix="react-select"
                components={components}
                inputValue={inputValue}
                isClearable={false}
                isMulti={true}
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={addValue}
                placeholder="Type something and press enter..."
                value={values}
                autoFocus={autoFocus}
                styles={styles}
            />
            {
                (duplicate < 0 || values.length === 0) ? null : (
                    <Alert type={MessageType.WARNING} shake={true} showIcon={true} isDismissible={true}>
                        <code>{values[duplicate].label}</code> is already in the list
                    </Alert>
                )
            }
            {
                (!currMessage) ? null : (
                    <Alert type="warning" shake={true} showIcon={true} isDismissible={true}>
                        {currMessage}
                    </Alert>
                )
            }
        </>
    );
}
