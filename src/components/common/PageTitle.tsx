import React from "react";

type Props = {
    text: string;
};

const PageTitle: React.FC<Props> = ({text}) => {
    return <h1 className="m-0 text-2xl">{text}</h1>
};

export default PageTitle;