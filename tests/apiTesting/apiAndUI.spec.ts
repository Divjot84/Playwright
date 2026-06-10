import {test, expect} from '@playwright/test';

test('Test API and UI together', async ({ request, page }) => {
    const createResponse = await request.post(
        'https://reqres.in/api/users',
        {
            headers: {  
                'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
            },
            data: {
                name: 'John Doe',
                job: 'Software Engineer'
            }
        }
    );          
    expect(createResponse.status()).toBe(201);

    
});
