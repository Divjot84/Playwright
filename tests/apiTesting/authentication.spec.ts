import {test, expect} from '@playwright/test';

test('Authenticated api call', async ({request}) => {
    const loginResponse = await request.post('https://reqres.in/api/login',
        {
            headers: {
                'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
            },
            data:{
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        } 
    );
    expect(loginResponse.status()).toBe(200);

    const body = await loginResponse.json();

    expect(body.token).toBeDefined();

    console.log(body.token);
});
