import React from "react";
import { FontSize } from "../../constants/tailwind";

type Props = {
    text: string;
};

const PageTitle: React.FC<Props> = ({text}) => {
    return <h1 className={`my-4 ${FontSize.PageHeader}`}>{text}</h1>
};

export default PageTitle;