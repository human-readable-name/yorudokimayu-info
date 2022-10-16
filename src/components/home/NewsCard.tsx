import { NewsItem } from "../../entities/home/NewsItem"
import NewsArticleLink from "./NewsArticleLink";

type Props = {
    newsItem: NewsItem;
};

const NewsCard: React.FC<Props> = ({newsItem}: Props) => {
    return <article>
        <p>
            {newsItem.text}
        </p>
        { newsItem.links && newsItem.links.length > 0 && 
            <ul className="flex flex-wrap space-x-2">
                {newsItem.links.map((newsItemLink, index) => <NewsArticleLink newsItemLink={newsItemLink} key={index} />)}
            </ul>
        }
    </article>
};

export default NewsCard;