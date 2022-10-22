import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import Index, {Props as HomeProps} from '../components/home/Index';

import { SupportedLocale } from '../constants/i18n';
import { ensureSupportedLocale } from '../utilities/i18n';
import { InMemoryContentLinkService } from '../services/home/InMemoryContentLinkService';
import { InMemoryNewsService } from '../services/home/InMemoryNewsService';
import { InMemoryMetaDataService } from '../services/common/InMemoryMetaDataService';

interface GetStaticProps {
    locale: string;
}

export const getStaticProps = async ({locale}: GetStaticProps) => {
    const validatedLocale = ensureSupportedLocale(locale);
    const metaDataService = new InMemoryMetaDataService();
    const newsService = new InMemoryNewsService();
    const contentLinkService = new InMemoryContentLinkService();
    return {
        props: {
            locale: validatedLocale as SupportedLocale,
            meta: metaDataService.getHomeMeta(validatedLocale),
            homeProps: {
                siteName: metaDataService.getSiteName(validatedLocale),
                siteDescription: metaDataService.getSiteDescription(validatedLocale),
                news: newsService.listNews(validatedLocale),
                links: contentLinkService.listContentLinks(validatedLocale),
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
