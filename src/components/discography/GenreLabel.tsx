import React from "react";
import { Genre } from "../../entities/discography/Product";

type Props = {
    genre: Genre;
};

const GenreLabel: React.FC<Props> = ({genre}) => {
    return <span className="bg-slate-200 text-base px-2">{genre}</span>
};

export default GenreLabel;