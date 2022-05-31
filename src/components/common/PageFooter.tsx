import React from "react";

const PageFooter: React.FC = () => {
    return <footer className="flex justify-center align-center mt-8 border-t">
        <div className="justify-center text-center text-sm m-8">
            アクセス解析にGoogleAnalyticsを使っています。<br/>
            記載情報修正は<span className="underline"><a href="https://docs.google.com/spreadsheets/d/1mpA4WlCHcOBv9KY8MWdiueU4HGsE-7-Nkc8tbtgvZoQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Spreadsheet</a></span>へ<br/>
        </div>
    </footer>
};

export default PageFooter;