import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductKindLabel from '../../../../src/components/discography/ProductKindLabel';

export default {
    title: 'components/discography/ProductKindLabel',
    component: ProductKindLabel,
    parameters: {layout: 'fullscreen'}
} as ComponentMeta<typeof ProductKindLabel>;

const Template: ComponentStory<typeof ProductKindLabel> = (args) => <ProductKindLabel {...args} />;
export const Single = Template.bind({});
Single.args = {productKind: "Single"};

export const Ep = Template.bind({});
Ep.args = {productKind: "EP"};