import React from "react";
import { generateNextSeo } from 'next-seo/pages';
import { Meta } from '../../services/common/MetaDataService';

type Props = {
    meta: Meta;
};

const PageMeta: React.FC<Props> = ({meta}: Props) => {
    const openGraph = {
        type: "website",
        title: meta.title,
        description: meta.description,
        siteName: meta.siteName,
        locale: meta.locale,
        images: [
            {url: "https://kimayu.rocks/share.png"},
        ],
    }
    return <>
        {
            generateNextSeo({
                title: meta.title,
                description: meta.description,
                openGraph: openGraph,
                canonical: meta.canonical,
                languageAlternates: meta.languageAlternates,
            })
        }
    </>;
};

export default PageMeta;