import { test, expect } from '@playwright/test';

test('Delete user', async ({ request }) => {

  const response = await request.delete(
    'https://reqres.in/api/users/2',
    {
      headers: {
        'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
      }
    }
  );

  expect(response.status()).toBe(204);
});