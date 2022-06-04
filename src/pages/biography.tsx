import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';

import Index, {Props as BiographyProps} from '../components/biography/Index';
import { getProfile, listEventHistories, listCollaborations } from '../services/biography/BiographyService';
import { getBiographyMeta } from '../services/common/MetaDataService';
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
            meta: getBiographyMeta(validatedLocale),
            biographyProps: {
                profile: getProfile(validatedLocale),
                eventHistories: listEventHistories(validatedLocale),
                collaborations: listCollaborations(validatedLocale),
            } as BiographyProps,
        }
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BiographyPage: NextPage<Props> = ({locale, meta, biographyProps}) => {
    return (
        <>
            <PageMeta meta={meta} />
            <PageHeader currentLocale={locale} currentPageType="Biography" />
            <Index {...biographyProps} />
            <PageFooter locale={locale} />
        </>
    )
};

export default BiographyPage;