import React from "react";
import { LinkItem } from "../../services/common/Link"
import ExternalLink from "./ExternalLink";

type Props = {
    linkItems: LinkItem[];
};

const LinkList: React.FC<Props> = ({linkItems}: Props) => {
    return <ul className="flex flex-wrap gap-x-2 justify-start">
        {linkItems.map((linkItem, index) => 
            <li key={index}><ExternalLink linkItem={linkItem} /></li>
        )}
    </ul>;
};

export default LinkList;