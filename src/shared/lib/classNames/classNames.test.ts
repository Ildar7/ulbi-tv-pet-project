import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('mods classes', () => {
        const expected = 'someClass hovered responsable';
        expect(
            classNames('someClass', { hovered: true, responsable: true }, []),
        )
            .toBe(expected);
    });

    test('mods classes', () => {
        const expected = 'someClass hovered';
        expect(
            classNames('someClass', { hovered: true, responsable: false }, []),
        )
            .toBe(expected);
    });

    test('additional and mods classes', () => {
        const expected = 'someClass class1 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, responsable: false },
                ['class1'],
            ),
        )
            .toBe(expected);
    });
});
