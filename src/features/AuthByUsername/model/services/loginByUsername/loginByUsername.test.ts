import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from '../../../../../entities/User';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    const userData = {
        id: '1',
        username: 'ildar',
    };

    test('success login', async () => {
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userData);
    });

    test('error login', async () => {
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        asyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('ERROR');
    });
});
