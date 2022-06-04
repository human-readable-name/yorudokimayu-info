import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import Index, {Props as HomeProps} from '../components/home/Index';

import { listContentLinks } from '../services/home/ContentLinkService';
import { getHomeMeta } from '../services/common/MetaDataService';
import { SupportedLocale } from '../constants/i18n';
import { ensureSupportedLocale, translateSiteDescription, translateSitename } from '../utilities/i18n';

interface GetStaticProps {
    locale: string;
}

export const getStaticProps = async ({locale}: GetStaticProps) => {
    const validatedLocale = ensureSupportedLocale(locale);
    return {
        props: {
            locale: validatedLocale as SupportedLocale,
            meta: getHomeMeta(validatedLocale),
            homeProps: {
                siteName: translateSitename(validatedLocale),
                siteDescription: translateSiteDescription(validatedLocale),
                links: listContentLinks(validatedLocale),
            } as HomeProps,
        },
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<Props> = ({locale, meta, homeProps}: Props) => {
    return (
        <>
            <PageMeta meta={meta}/>
            <PageHeader currentLocale={locale} currentPageType="Home" />
            <Index {...homeProps} />
            <PageFooter locale={locale} />
        </>
    )
};

export default HomePage;
