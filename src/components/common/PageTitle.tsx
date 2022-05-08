import React from "react";

type Props = {
    text: string;
};

const PageTitle: React.FC<Props> = ({text}) => {
    return <h1 className="my-4 text-2xl">{text}</h1>
};

export default PageTitle;