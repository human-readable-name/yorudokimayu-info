import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from '../../../components/discography/ProductCard';

export default {
    title: 'components/discography/ProductCard',
    component: ProductCard,
    parameters: {layout: 'fullscreen'},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;
export const productCard = Template.bind({});
productCard.args = { 
    productSummary: {
        id: "1st-ep",
        name: "sparkler",
        kind: "EP",
        genre: "Alternative",
        dateOfRelease: "2022-04-24",
        description: "1st EP M3-2022春 お-07a頒布で頒布・Boothにて販売",
        credits: [
            "作曲・Tr2作詞 マッチ",
            "Tr5作詞 esora uma [浮遊信号]",
            "Tr3Tr4Tr6作詞・ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "クロスフェード", url: "https://youtu.be/FmVb7r21Z-M"},
        ],
        storeLinks: [
            {name: "Official store", url: "https://461okmy.booth.pm/items/3756256"},
        ]
    }
};