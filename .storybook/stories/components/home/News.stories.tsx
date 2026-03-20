import React from 'react';
import { StoryFn, Meta } from "@storybook/nextjs-vite";
import News from "../../../../src/components/home/News";

export default {
    title: 'components/home/News',
    component: News,
    parameters: {layout: 'fullscreen'}
} as Meta<typeof News>;

const Template: StoryFn<typeof News> = (args) => <News {...args} />;
export const WithNews = Template.bind({});
WithNews.args = {
    news: [
        {
            text: "タイトルのみでリンクなし"
        },
        {
            text: "タイトルとリンク", 
            links: [
                {name: "リンク1", url: "https://locahost:6666"},
                {name: "リンク2", url: "https://locahost:6666"},
            ]
        }
    ]
};
export const WithoutNews = Template.bind({});
WithoutNews.args = {
    news: []
};