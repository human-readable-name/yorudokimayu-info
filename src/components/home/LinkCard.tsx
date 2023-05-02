import React from "react";
import Link from "next/link";
import { ContentLink } from "../../services/home/ContentLinkService";
import { isInternal } from "../../utilities/link";

type Props = {
    contentLink: ContentLink;
};

const LinkCard: React.FC<Props> = ({contentLink}: Props) => {
    const {title, caption, url} = contentLink;
    if (isInternal(url)) {
        return (
            <Link href={url} className="m-4 p-4 border border-solid rounded-lg w-80 border-indigo-800 text-indigo-800 justify-self-center">
                <h2 className="mb-5 text-2xl">{title}</h2>
                <p className="text-xl">{caption}</p>
            </Link>
        );
    } else { 
        return (
            <a className="m-4 p-4 border border-solid rounded-lg w-80 border-indigo-800 text-indigo-800 justify-self-center" href={url} target="_blank"  rel="noopener noreferrer" >
                <h2 className="mb-5 text-2xl">{title}</h2>
                <p className="text-xl">{caption}</p>
            </a>
        );
    }
};

export default LinkCard;