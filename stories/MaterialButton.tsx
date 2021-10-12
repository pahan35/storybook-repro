import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import { ButtonTypeMap } from "@material-ui/core";

type ButtonProps = ButtonTypeMap["props"] & {
    label: string;
};

export const MaterialButton: FC<ButtonProps> = ({ label, ...rest }) => {
    return <Button {...rest}>{label}</Button>;
};
