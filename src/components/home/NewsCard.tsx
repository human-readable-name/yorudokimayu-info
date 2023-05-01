import { NewsItem } from "../../services/home/NewsService"
import LinkList from "../common/LinkList";

type Props = {
    newsItem: NewsItem;
};

const NewsCard: React.FC<Props> = ({newsItem}: Props) => {
    return <article className="p-2">
        <p>
            {newsItem.text}
        </p>
        { newsItem.links && newsItem.links.length > 0 && 
            <LinkList linkItems={newsItem.links} />
        }
    </article>
};

export default NewsCard;