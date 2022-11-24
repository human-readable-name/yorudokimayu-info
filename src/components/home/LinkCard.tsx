import React from "react";
import Link from "next/link";
import { ContentLink } from "../../services/home/ContentLinkService";
import { isInternal } from "../../utilities/link";

type Props = {
    contentLink: ContentLink;
};

const LinkCard: React.FC<Props> = ({contentLink}: Props) => {
    const {title, caption, url} = contentLink;
    const anchorClassName = "m-4 p-6 border border-solid rounded-lg w-80 border-slate-800 hover:border-indigo-800 hover:text-indigo-800 justify-self-center";
    if (isInternal(url)) {
        return (
            <Link href={url} className={anchorClassName}>
                <h2 className="mb-5 text-2xl">{title}</h2>
                <p className="text-xl">{caption}</p>
            </Link>
        );
    } else { 
        return (
            <a className={anchorClassName} href={url} target="_blank"  rel="noopener noreferrer" >
                <h2 className="mb-5 text-2xl">{title}</h2>
                <p className="text-xl">{caption}</p>
            </a>
        );
    }
};

export default LinkCard;