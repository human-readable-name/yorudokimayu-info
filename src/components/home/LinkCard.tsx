import React from "react";
import { ContentLink } from "../../entities/home/ContentLink";
import { isInternal } from "../../utilities/link";

type Props = {
    contentLink: ContentLink;
};

const LinkCard: React.FC<Props> = ({contentLink}: Props) => {
    const {title, caption, url} = contentLink;
    const isInternalLink  = isInternal(url);
    const className = "m-4 p-6 border border-solid rounded-lg max-w-xs border-slate-800 hover:border-indigo-800 hover:text-indigo-800";
    const anchorProps = isInternalLink
        ? {className: className, href: url} 
        : {className: className, href: url, target:"_blank", rel: "noopener noreferrer"};
    return <>
        <a {...anchorProps} >
            <h2 className="mb-5 text-2xl">{title}</h2>
            <p className="text-xl">{caption}</p>
        </a>
    </>;
};

export default LinkCard;