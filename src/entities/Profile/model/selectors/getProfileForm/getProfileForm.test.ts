import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country/index';
import { Currency } from '../../../../Currency/index';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Belarus,
            lastname: 'ambvalll',
            first: 'big',
            city: 'kazan',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
