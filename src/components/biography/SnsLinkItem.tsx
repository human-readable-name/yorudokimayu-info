import React from "react";

type Props = {
    name: string;
    url: string;
};

const SnsLinkItem : React.FC<Props> = ({name, url}: Props) => {
    return <a
        className="p-2 border-slate-400 hover:border-indigo-800 hover:text-indigo-800 border border-solid rounded-lg" 
        href={url}
        target="_blank" 
        rel="noopener noreferrer">
            {name}
        </a>
};

export default SnsLinkItem;