import React from "react";
import { FontSize } from "../../constants/tailwind";

type Props = {
    text: string;
};

const SectionTitle: React.FC<Props> = ({text}) => {
    return <h2 className={`my-4 ${FontSize.SectionHeader}`}>{text}</h2>
};

export default SectionTitle;