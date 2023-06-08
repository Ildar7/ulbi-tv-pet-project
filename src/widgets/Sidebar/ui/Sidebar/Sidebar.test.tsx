import { fireEvent, render, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('check button in document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check click to collapse sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sidebarBtn'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(screen.getByTestId('sidebarBtn'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
