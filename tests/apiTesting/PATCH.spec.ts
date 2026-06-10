import { test, expect } from '@playwright/test';

test('Update user using PATCH', async ({ request }) => {

  const response = await request.patch(
    'https://reqres.in/api/users/2',
    {
      headers: {
        'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
      },
      data: {
        job: 'Senior QA Engineer'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.job).toBe('Senior QA Engineer');

  console.log(body);
});