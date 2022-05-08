import React from "react";

type Props = {
    title: string;
    caption: string;
    url: string;
};

const LinkCard: React.FC<Props> = ({title, caption, url}) => {
    return <>
        <a href={url} className="m-4 p-6 border border-solid rounded-lg max-w-xs hover:border-indigo-800 hover:text-indigo-800">
            <h2 className="mb-5 text-2xl">{title}</h2>
            <p className="text-xl">{caption}</p>
        </a>
    </>;
};

export default LinkCard;