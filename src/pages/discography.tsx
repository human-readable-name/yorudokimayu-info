import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';

import Index, {Props as DiscographyProps} from '../components/discography/Index';
import { getDiscographyMeta } from '../services/common/MetaDataService';
import { listProductSummaries } from '../services/discography/ProductService';
import { SupportedLocale } from '../constants/i18n';
import { ensureSupportedLocale } from '../utilities/i18n';


interface GetStaticProps {
    locale: string;
}

export const getStaticProps = async ({locale}: GetStaticProps) => {
    const validatedLocale = ensureSupportedLocale(locale);
    return {
        props: {
            locale: validatedLocale as SupportedLocale,
            meta: getDiscographyMeta(validatedLocale),
            discographyProps: {
                productSummaries: listProductSummaries(validatedLocale),
            } as DiscographyProps,
        },
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const DiscographyPage: NextPage<Props> = ({locale, meta, discographyProps}) => {
    return (
        <>
            <PageMeta meta={meta} />
            <PageHeader currentLocale={locale} currentPageType="Discography" />
            <Index {...discographyProps} />
            <PageFooter locale={locale} />
        </>
    );
};

export default DiscographyPage;