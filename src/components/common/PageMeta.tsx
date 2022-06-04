import React from "react";
import { NextSeo } from 'next-seo';
import { Meta } from '../../entities/common/Meta';

type Props = {
    meta: Meta;
};

const PageMeta: React.FC<Props> = ({meta}: Props) => {
    const openGraph = {
        type: "website",
        title: meta.title,
        description: meta.description,
        site_name: meta.siteName,
        locale: meta.locale,
        images: [
            {url: "https://kimayu.rocks/share.png"},
        ],
    }
    return <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={openGraph}
        languageAlternates={meta.languageAlternates}
    />
};

export default PageMeta;