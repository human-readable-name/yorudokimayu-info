import React from "react";

type Props = {
    dateOfRelease: string; // yyyy-MM-dd
};

const DateOfRleaseLabel: React.FC<Props> = ({dateOfRelease}) => {
    return <span className="text-slate-600 text-base">{dateOfRelease}</span>
};

export default DateOfRleaseLabel;