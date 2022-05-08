import React from "react";

type Props = {
    text: string;
};

const SectionTitle: React.FC<Props> = ({text}) => {
    return <h2 className="my-4 text-xl">{text}</h2>
};

export default SectionTitle;