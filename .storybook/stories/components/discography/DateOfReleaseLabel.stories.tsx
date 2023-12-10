import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateOfRleaseLabel from '../../../../src/components/discography/DateOfReleaseLabel';

export default {
    title: 'components/discography/DateOfRleaseLabel',
    component: DateOfRleaseLabel,
    parameters: {layout: 'fullscreen'},
} as ComponentMeta<typeof DateOfRleaseLabel>;

const Template: ComponentStory<typeof DateOfRleaseLabel> = (args) => <DateOfRleaseLabel {...args} />;
export const label = Template.bind({});
label.args = { dateOfRelease: "2020-10-10"};