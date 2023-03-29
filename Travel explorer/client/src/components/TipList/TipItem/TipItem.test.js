import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';

import { TipItem } from './TipItem'

describe('Tip item', () => {
    test('Show title', () => {
        const title = 'Some tip title';

        render(
            <BrowserRouter>
                <TipItem title={title} />
            </BrowserRouter>
        );

        expect(screen.queryByText(title)).toBeInTheDocument();
    });

    test('On details click', async () => {
        global.window = { location: { pathname: null } };
        const tipId = 'dnhjkfeihdskf';

        render(
            <BrowserRouter>
                <TipItem _id={tipId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('View Details'));

        expect(global.window.location.pathname).toContain(`/tips/${tipId}`)
    });
});