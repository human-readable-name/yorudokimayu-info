import React from "react";
import { SupportedLocale } from "../../constants/i18n";
import { ensureSupportedLocale } from "../../utilities/i18n";

type FooterMessage = {
    analytics: string;
    correction: string;
    github: string;
}

const translate = (locale: SupportedLocale): FooterMessage => {
    switch (locale) {
        case "en":
            return {
                analytics: "This site uses GoogleAnalytics for access analysis.",
                correction: "If there are any omissions of information,",
                github: "make an issue on GitHub",
            }
        default: 
            return {
                analytics: "アクセス解析にGoogleAnalyticsを使っています。",
                correction: "記載情報の抜け漏れがあれば、",
                github: "GitHubにIssueを作ってください"
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
            {tlanslatedMessage.correction} <span className="underline"><a href="https://github.com/01G271BR9H8WH1VNE8QHKYGDCX/yorudokimayu-info/issues/new/choose" target="_blank" rel="noopener noreferrer">{tlanslatedMessage.github}</a></span><br/>
        </div>
    </footer>
};

export default PageFooter;