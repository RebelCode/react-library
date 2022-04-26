import React from "react";
import {FlexRow, FlexColumn} from "../Flex"

type Props = {
    id?: string;
    value?: boolean;
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

export function Checkbox({id, value, onChange, disabled}: Props) {
    return (
        <FlexRow>
            <FlexColumn>
                <input
                    id={id}
                    type="checkbox"
                    value="1"
                    checked={!!value}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                />
            </FlexColumn>
        </FlexRow>
    );
}
