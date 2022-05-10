import React from "react";
import { isInternal } from "../../utilities/link";

type Props = {
    title: string;
    caption: string;
    url: string;
};

const LinkCard: React.FC<Props> = ({title, caption, url}) => {
    const isInternalLink  = isInternal(url);
    const className = "m-4 p-6 border border-solid rounded-lg max-w-xs hover:border-indigo-800 hover:text-indigo-800";
    const anchorProps = isInternalLink
        ? {className: className, href: url} 
        : {className: className, href: url, target:"_blank", rel: "noopener noreferrer"};
    
    const postCaption = isInternalLink ? "" : " (外部リンク)";
    return <>
        <a {...anchorProps} >
            <h2 className="mb-5 text-2xl">{title}</h2>
            <p className="text-xl">{caption}{postCaption}</p>
        </a>
    </>;
};

export default LinkCard;