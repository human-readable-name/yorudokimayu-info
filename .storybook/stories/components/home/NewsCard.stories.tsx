import React from 'react';
import { StoryFn, Meta } from "@storybook/nextjs-vite";
import NewsCard from "../../../../src/components/home/NewsCard";

export default {
    title: 'components/home/NewsCard',
    component: NewsCard,
    parameters: {layout: 'fullscreen'}
} as Meta<typeof NewsCard>;

const Template: StoryFn<typeof NewsCard> = (args) => <NewsCard {...args} />;
export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
    newsItem: {
        text: "タイトルのみでリンクなし"
    }
};

export const WithLinks = Template.bind({});
WithLinks.args = {
    newsItem: {
        text: "タイトルとリンク", 
        links: [
            {name: "リンク1", url: "https://locahost:6666"},
            {name: "リンク2", url: "https://locahost:6666"},
        ]
    }
};