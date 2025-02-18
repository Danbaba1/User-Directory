import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'male',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    gender: 'female',
  },
];

export const server = setupServer(
  http.get('https://dummyjson.com/users', () => {
    return HttpResponse.json({
      users,
      total: 2,
      skip: 0,
      limit: 20,
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());