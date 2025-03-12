import { PropsWithChildren } from "react";

interface Props{
    onClick(e:any):void;
}

export default function (props: PropsWithChildren<Props>){
    return(
        <div>
            {props.children}
        </div>
    );
}