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
        dateOfRelease: new Date("2022-04-24"),
        description: "1st EP M3-2022春 お-07a頒布で頒布・Boothにて販売",
        links: [
            {name: "クロスフェード", url: "https://youtu.be/FmVb7r21Z-M"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3756256"}
        ]
    }
};