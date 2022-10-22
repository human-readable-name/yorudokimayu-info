import React from "react";
import { Genre } from "../../services/discography/ProductService";

type Props = {
    genre: Genre;
};

const GenreLabel: React.FC<Props> = ({genre}) => {
    return <span className="bg-slate-200 text-base px-2">{genre}</span>
};

export default GenreLabel;