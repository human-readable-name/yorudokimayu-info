import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PageTitle from '../../../../src/components/common/PageTitle';

export default {
    title: 'components/common/PageTitle',
    component: PageTitle,
    parameters: {layout: 'fullscreen'},
} as Meta<typeof PageTitle>;

const Template: StoryFn<typeof PageTitle> = (args) => <PageTitle {...args} />;
export const EnglishShort = Template.bind({});
EnglishShort.args = { text: "sparkle" };
export const JapaneseLong = Template.bind({});
JapaneseLong.args = { text: "カラの鼓動はソラになる" };
