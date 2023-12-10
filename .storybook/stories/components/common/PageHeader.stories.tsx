import { StoryFn, Meta } from '@storybook/react';
import PageHeader from '../../../../src/components/common/PageHeader';

export default {
    title: 'components/common/PageHeader',
    component: PageHeader,
    parameters: {}
} as Meta<typeof PageHeader>;

const Template: StoryFn<typeof PageHeader> = (args) => <PageHeader {...args} />;
export const pageHeader = Template.bind({});
pageHeader.args = {
    currentLocale: 'ja',
    currentPageType: 'Home',
};