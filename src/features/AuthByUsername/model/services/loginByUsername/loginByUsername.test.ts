import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    const userData = {
        id: '1',
        username: 'ildar',
    };

    test('success login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userData);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('ERROR');
    });
});
