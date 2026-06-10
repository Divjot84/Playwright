import {test, expect} from '@playwright/test';

test('Update user using patch',async({request})=>{
    const response = await request.patch('https://reqres.in/api/users/2',{
        headers:{
            'x-api-key': 'pub_ace9f18760bc9bf8a5bfbf48969a38b9ed7f6ab55ffed15f9f75bc31be3928ad'
        },
        data:{
            name:'Jane Doe',
            job:'Product Manager'
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.job).toBe('Product Manager');
    console.log('Response Body:', body);
})