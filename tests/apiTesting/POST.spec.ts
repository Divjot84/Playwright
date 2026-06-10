import {test, expect} from '@playwright/test';

test('Create a User',async({request})=>{
    const response = await request.post('https://reqres.in/api/users',{
        headers:{
            'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
        },
        data:{
            name:'John Doe',
            job:'Software Engineer'
        }
    });
    expect(response.status()).toBe(201);
    // console.log('Status:', response.status());
    // console.log('Response:', await response.text());

    const body = await response.json();
    console.log('Response Body:', body);
});

/*
Learn GET requests
Learn POST requests
Learn PUT/PATCH requests
Learn DELETE requests
Learn authentication (JWT tokens)
Learn API + UI integration
Learn mocking APIs in Playwright
*/