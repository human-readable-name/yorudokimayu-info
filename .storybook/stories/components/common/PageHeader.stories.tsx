import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageHeader from '../../../../src/components/common/PageHeader';

export default {
    title: 'components/common/PageHeader',
    component: PageHeader,
    parameters: {}
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;
export const pageHeader = Template.bind({});
pageHeader.args = {
    currentLocale: 'ja',
    currentPageType: 'Home',
};