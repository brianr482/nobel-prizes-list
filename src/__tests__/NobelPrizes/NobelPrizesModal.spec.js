import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NobelPrizeModal from 'pages/home/NobelPrizesList/NobelPrizeModal/NobelPrizeModal';
import nobelPrizesIndexResultMock from '../__mocks__/nobelPrizeIndex';

it('renders a Nobel Prize modal', async () => {
  const fakeNobel = nobelPrizesIndexResultMock.prizes[0];
  const NobelPrizesItemComponent = render(
    <NobelPrizeModal nobelPrize={fakeNobel} />
  );

  const title = await NobelPrizesItemComponent.findByText(
    `${fakeNobel.category} (${fakeNobel.year})`
  );
  expect(title).toBeInTheDocument();

  const laureatesNumber = await screen.findByTestId('modal-laureates-number');
  expect(laureatesNumber).toHaveTextContent(
    `${fakeNobel.laureates.length} laureate`
  );

  const laureatesList = await screen.findByTestId('modal-laureates-list');
  expect(laureatesList).toHaveTextContent(fakeNobel.laureates[0].firstname);
});

it('click "clear icon button" should trigger onCloseClick', async () => {
  const fakeNobel = nobelPrizesIndexResultMock.prizes[0];
  const onCloseClick = jest.fn();
  render(
    <NobelPrizeModal nobelPrize={fakeNobel} onCloseClick={onCloseClick} />
  );

  const closeButton = await screen.findByTestId('modal-clear-btn');
  userEvent.click(closeButton);

  expect(onCloseClick).toHaveBeenCalledTimes(1);
});
