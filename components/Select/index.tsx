import React, {ForwardedRef, MutableRefObject, ReactElement} from "react";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import {classList} from "../../utils/classes";
import "../../styles/fields.pcss";
import css from "./Select.pcss";

export type SelectOption = {
    value: any;
    label: string | ReactElement;
}

export declare type SelectChangeHandler = (option: SelectOption) => void;

type Props = {
    id?: string;
    className?: string;
    value?: string;
    placeholder?: string;
    onChange?: SelectChangeHandler;
    options?: Array<SelectOption>;
    isSearchable?: boolean;
    isMulti?: boolean;
    isClearable?: boolean;
    isCreatable?: boolean;
    width?: string | number;
    menuIsOpen?: boolean;
    isValidNewOption?: (value: string) => boolean;

    [k: string]: any;
}

export const SelectStyles = (props: Record<string, any> = {}) => ({
    option: (prev: any, state: any) => ({
        ...prev,
        cursor: "pointer",
        lineHeight: "24px",
    }),
    menu: (prev: any, state: any) => ({
        ...prev,
        margin: "6px 0",
        boxShadow: "0 2px 8px " + css.shadowColor,
        overflow: "hidden",
    }),
    menuList: (prev: any, state: any) => ({
        padding: "0px",
    }),
    control: (prev: any, state: { isFocused: any; }) => {
        let style = {
            ...prev,
            cursor: "pointer",
            lineHeight: "2",
            minHeight: "40px",
        };

        if (state.isFocused) {
            style.borderColor = css.primaryColor;
            style.boxShadow = `0 0 0 1px ${css.primaryColor}`;
        }

        return style;
    },
    valueContainer: (prev: any, state: any) => ({
        ...prev,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
    }),
    container: (prev: any, state: any) => ({
        ...prev,
        width: props.width || "100%",
    }),
    multiValue: (prev: any, state: any) => ({
        ...prev,
        padding: "0 6px",
    }),
    input: (prev: any, state: any) => ({
        ...prev,
        outline: "0 transparent !important",
        border: "0 transparent !important",
        boxShadow: "0 0 0 transparent !important",
    }),
    indicatorSeparator: (prev: any, state: any) => ({
        ...prev,
        margin: "0",
        backgroundColor: "transparent",
    }),
    menuPortal: (base: any) => ({
        ...base,
        zIndex: 9999999
    })
});

export const Select = React.forwardRef<HTMLElement, Props>((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const options = props.options ?? [];
    const value = options.find((opt) => opt.value === props.value);

    props = {
        ...props,
        id: undefined,
        className: classList("react-select", props.className as string),
        classNamePrefix: "react-select",
        inputId: props.id,
        menuPosition: "absolute",
    };

    const styles = SelectStyles(props);

    const theme = (theme: { colors: any; }) => ({
        ...theme,
        borderRadius: 3,
        colors: {
            ...theme.colors,
            primary: css.primaryColor,
            primary25: css.washedColor,
        },
    });

    const Component = props.isCreatable ? CreatableSelect : props.async ? AsyncSelect : ReactSelect;

    return (
        <Component {...props}
                   ref={ref}
                   isSearchable={props.isCreatable}
                   value={value}
                   styles={styles}
                   theme={theme}
                   menuPlacement="auto"
                   menuPortalTarget={document.body}
                   menuShouldScrollIntoView={true}
        />
    );
});
