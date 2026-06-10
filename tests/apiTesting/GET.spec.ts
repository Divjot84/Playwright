import {test,expect} from '@playwright/test';

test('Get All Users',async({request})=>{
    const response  = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const users  = await response.json();
    expect(users.length).toBeGreaterThan(0);

    console.log(users);
});



