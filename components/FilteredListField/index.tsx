import React from "react";
import {ListField, Props as InnerProps} from "../ListField";

export interface Props extends InnerProps {
    filter: Function;
    excludeMsg?: string;
}

export function FilteredListField(props: Props) {
    const [excluded, setExcluded] = React.useState("");

    if (props.filter) {
        setExcluded("");
    }
    // TODO: fix come back n fix this
    const onChange = (values: Array<string>) => {
        const excludedIdx = props.filter ?
            values.findIndex((val) => props.filter((s:string) => !values.includes(s)))
            
            // values.findIndex((val) => props.exclude.includes(val))
            : -1;

        if (excludedIdx > -1) {
            setExcluded(values[excludedIdx]);
        } else {
            props.onChange(values);
        }
    };

    let message = undefined;
    if (excluded.length > 0) {
        const token = "%s";
        const tokenIdx = props.excludeMsg && props.excludeMsg.indexOf("%s");

        const before = props.excludeMsg && props.excludeMsg.substring(0, tokenIdx as number);
        const after = props.excludeMsg&&props.excludeMsg.substring((tokenIdx as number) + token.length);

        message = <>{before}<code>{excluded}</code>{after}</>;
    }

    const newProps = {
        ...props,
        message,
        onChange,
    };

    return <ListField {...newProps} />;
}
