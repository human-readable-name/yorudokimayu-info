import React from "react";
import { Color } from "../../constants/tailwind";

type Props = {
    name: string;
    url: string;
};

const SnsLinkItem : React.FC<Props> = ({name, url}: Props) => {
    return <a
        className={`p-2 border-${Color.Link} text-${Color.Link} border border-solid rounded-lg`} 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
    >
        {name}
    </a>;
};

export default SnsLinkItem;