import { StoryFn, Meta } from '@storybook/react';
import DateOfRleaseLabel from '../../../../src/components/discography/DateOfReleaseLabel';

export default {
    title: 'components/discography/DateOfRleaseLabel',
    component: DateOfRleaseLabel,
    parameters: {layout: 'fullscreen'},
} as Meta<typeof DateOfRleaseLabel>;

const Template: StoryFn<typeof DateOfRleaseLabel> = (args) => <DateOfRleaseLabel {...args} />;
export const label = Template.bind({});
label.args = { dateOfRelease: "2020-10-10"};