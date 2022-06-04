import React from "react";
import { SupportedLocale } from "../../constants/i18n";
import { ensureSupportedLocale } from "../../utilities/i18n";

type FooterMessage = {
    analytics: string;
    correction: string;
}

const translate = (locale: SupportedLocale): FooterMessage => {
    switch (locale) {
        case "en":
            return {
                analytics: "This site uses GoogleAnalytics for access analysis.",
                correction: "Update history: ",
            }
        default: 
            return {
                analytics: "アクセス解析にGoogleAnalyticsを使っています。",
                correction: "記載情報修正",
            }
    }
}

type Props = { 
    locale: string;
};

const PageFooter: React.FC<Props> = ({locale}) => {
    const tlanslatedMessage = translate(ensureSupportedLocale(locale));
    return <footer className="flex justify-center align-center mt-8 border-t">
        <div className="justify-center text-center text-sm m-8">
            {tlanslatedMessage.analytics}<br/>
            {tlanslatedMessage.correction} <span className="underline"><a href="https://docs.google.com/spreadsheets/d/1mpA4WlCHcOBv9KY8MWdiueU4HGsE-7-Nkc8tbtgvZoQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Spreadsheet</a></span><br/>
        </div>
    </footer>
};

export default PageFooter;