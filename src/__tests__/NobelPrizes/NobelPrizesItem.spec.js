import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NobelPrizeItem from 'pages/home/NobelPrizesList/NobelPrizeItem/NobelPrizeItem';
import nobelPrizesIndexResultMock from '../__mocks__/nobelPrizeIndex';

it('renders a Nobel Prize item', async () => {
  const fakeNobel = nobelPrizesIndexResultMock.prizes[0];
  const NobelPrizesItemComponent = render(
    <NobelPrizeItem item={fakeNobel} onItemClick={() => null} />
  );

  const itemCategory = await NobelPrizesItemComponent.findByText(
    fakeNobel.category
  );
  expect(itemCategory).toBeInTheDocument();

  const itemYear = await NobelPrizesItemComponent.findByText(fakeNobel.year);
  expect(itemYear).toBeInTheDocument();

  const itemDescription = await screen.findByTestId(
    `${fakeNobel.category}-${fakeNobel.year}-description`
  );
  expect(itemDescription).toHaveTextContent(
    `${fakeNobel.laureates.length} laureate`
  );

  expect(itemDescription).toHaveTextContent(fakeNobel.laureates[0].firstname);

  const showMoreButton = await screen.findByText('Show more');
  expect(showMoreButton).toBeInTheDocument();
});

it('click "show more" should trigger onItemClick', async () => {
  const fakeNobel = nobelPrizesIndexResultMock.prizes[0];
  const onItemClick = jest.fn();
  render(<NobelPrizeItem item={fakeNobel} onItemClick={onItemClick} />);

  const showMoreButton = await screen.findByText('Show more');
  userEvent.click(showMoreButton);

  expect(onItemClick).toHaveBeenCalledTimes(1);
});
