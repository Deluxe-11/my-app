import React from "react";
import {Button, ButtonTypeMap, ExtendButtonBase} from "@mui/material";

interface Prop extends ExtendButtonBase<ButtonTypeMap> {
    children?: | React.ReactChild
        | React.ReactChild[];
}

function CustomButton(props: Prop) {
    return <Button  {...props}>{props.children}</Button>
}

export default CustomButton;