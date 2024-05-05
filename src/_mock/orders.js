import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

export const orders = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  transactionId: faker.string.alphanumeric(10),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.commerce.productName(),
  customer: faker.person.fullName(),
  price: faker.commerce.price({ min: 100, max: 200, symbol: '$' }),
  quantity: sample([
    1, 10, 15, 3, 5
  ]),
  status: sample(['paid', 'pending']),
}));
