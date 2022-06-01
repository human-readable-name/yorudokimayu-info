import React from "react";
import { format } from "date-fns";

type Props = {
    date: Date;
};

const DateLabel: React.FC<Props> = ({date}) => {
    return <span className="text-slate-800 text-sm text-center">{format(date, "yyyy-MM-dd")}</span>
};

export default DateLabel;