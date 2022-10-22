import { NewsItemLink } from "../../services/home/NewsService";

type Props = {
    newsItemLink: NewsItemLink;
}
const NewsArticleLink: React.FC<Props> = ({newsItemLink}: Props) => {
    return <li>
        <a
            href={newsItemLink.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="rounded-sm border border-solid border-indigo-800 text-indigo-800 text-center text-sm"
        >
            {newsItemLink.name}
        </a>
    </li>
};

export default NewsArticleLink;