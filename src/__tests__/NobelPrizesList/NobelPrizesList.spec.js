import { expect } from '@jest/globals';
import { render, act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NobelPrizesList from 'pages/home/NobelPrizesList';
import nobelPrizesIndexResultMock from '../__mocks__/nobelPrizeIndex';

it('renders list of Nobel Prizes elements when api is available', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(nobelPrizesIndexResultMock),
    })
  );

  await act(async () => {
    render(<NobelPrizesList />);
  });

  const nobelPrizesCardsShowMore = await screen.findAllByText('Show more');
  expect(nobelPrizesCardsShowMore).toHaveLength(
    nobelPrizesIndexResultMock.prizes.length
  );

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it('renders error message with retry button when api is unavailable', async () => {
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.reject({ ok: false }));

  await act(async () => {
    render(<NobelPrizesList />);
  });

  const errorMessage = await screen.findByText('Something went wrong...');
  expect(errorMessage).toBeInTheDocument();

  const tryAgainButton = await screen.findByText('Try again');
  expect(tryAgainButton).toBeInTheDocument();

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it('renders Nobel Prize modal when user clicks on one of the show more button', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(nobelPrizesIndexResultMock),
    })
  );

  await act(async () => {
    render(<NobelPrizesList />);
  });

  const nobelPrizesCardsShowMore = await screen.findAllByText('Show more');
  userEvent.click(nobelPrizesCardsShowMore[2]);

  const nobelPrizeModalPartOfContent = await screen.findByText(
    'Laureates authors and motivations'
  );

  expect(nobelPrizeModalPartOfContent).toBeInTheDocument();

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
