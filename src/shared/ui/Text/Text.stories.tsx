import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello world!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Hello world!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Hello world!',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Hello world!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Hello world!',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
