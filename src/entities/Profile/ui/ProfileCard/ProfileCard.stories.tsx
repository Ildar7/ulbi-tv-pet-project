import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from '../../../Country/index';
import { Currency } from '../../../Currency/index';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Belarus,
        lastname: 'ambvalll',
        first: 'big',
        city: 'kazan',
        currency: Currency.USD,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
