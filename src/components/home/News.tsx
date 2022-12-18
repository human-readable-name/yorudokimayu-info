import NewsCard from "./NewsCard";
import SectionTitle from '../../components/common/SectionTitle';
import { NewsItem } from "../../services/home/NewsService";

export type Props = {
    news: NewsItem[];
};
const News: React.FC<Props>  = ({news}) => {
    if (news.length == 0) {
        return null;
    }

    return <>
        <SectionTitle text="News" />
        <div className="grid gap-y-1 divide-y" data-test-id="news">
            {news.map((newItem, index) => <NewsCard newsItem={newItem} key={index} />)}
        </div>
    </>
}

export default News;