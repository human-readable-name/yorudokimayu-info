import React from 'react';
import { StoryFn, Meta } from '@storybook/nextjs-vite';
import PageHeader from '../../../../src/components/common/PageHeader';

export default {
    title: 'components/common/PageHeader',
    component: PageHeader,
    parameters: {}
} as Meta<typeof PageHeader>;

const Template: StoryFn<typeof PageHeader> = (args) => <PageHeader {...args} />;
export const Header = Template.bind({});
Header.args = {
    currentLocale: 'ja',
    currentPageType: 'Home',
};