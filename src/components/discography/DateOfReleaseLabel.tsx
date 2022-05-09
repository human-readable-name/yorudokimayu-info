import React from "react";
import { format } from "date-fns";

type Props = {
    dateOfRelease: Date;
};

const DateOfRleaseLabel: React.FC<Props> = ({dateOfRelease}) => {
    return <span className="text-slate-600 text-base">{format(dateOfRelease, "yyyy-MM-dd")}</span>
};

export default DateOfRleaseLabel;