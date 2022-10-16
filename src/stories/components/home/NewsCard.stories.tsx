import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewsCard from "../../../components/home/NewsCard";

export default {
    title: 'components/home/NewsCard',
    component: NewsCard,
    parameters: {layout: 'fullscreen'}
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args) => <NewsCard {...args} />;
export const withoutLinks = Template.bind({});
withoutLinks.args = {
    newsItem: {
        text: "タイトルのみでリンクなし"
    }
};

export const withLinks = Template.bind({});
withLinks.args = {
    newsItem: {
        text: "タイトルとリンク", 
        links: [
            {name: "リンク1", url: "https://locahost:6666"},
            {name: "リンク2", url: "https://locahost:6666"},
        ]
    }
};