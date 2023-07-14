import { loginActions, loginReducer, LoginSchema } from 'features/AuthByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(
                state as LoginSchema,
                loginActions.setUsername('ildar'),
        )).toEqual({ username: 'ildar' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('ambal123'),
        )).toEqual({ password: 'ambal123' });
    });
});
