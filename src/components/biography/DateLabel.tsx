import React from "react";

type Props = {
    date: string; // yyyy-MM-dd
};

const DateLabel: React.FC<Props> = ({date}) => {
    return <span className="text-slate-800 text-sm text-center">{date}</span>
};

export default DateLabel;