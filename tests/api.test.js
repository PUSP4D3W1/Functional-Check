const { test, expect, request } = require('@playwright/test');

test.describe('Test API menggunakan playwright', () => {
    test('contoh GET', async ({}) => {
        const apiContext = await request.newContext();
        const res = await apiContext.get('https://reqres.in/api/users?page=2');
        expect(res.status()).toBe(200);
        const responBody = await res.json();
        console.log(responBody);
        expect(responBody.page).toBe(2);
        expect(responBody.per_page).toBe(6);
    });
    
    test('contoh POST', async ({}) => {
        const apiContext = await request.newContext();
        const postData = {
            email: "eve.holt@reqres.in",
            password: "pistol" 
        }
        const res = await apiContext.post('https://reqres.in/api/register', {
            data : postData
        });
        expect(res.status()).toBe(200);
        const responBody = await res.json();
        console.log(responBody);
        expect(responBody.id).toBe(4);
    });

    test('contoh PUT', async ({}) => {
        const apiContext = await request.newContext();
        const postData = {
            name: "morpheus",
            job: "zion resident" 
        }
        const res = await apiContext.post('https://reqres.in/api/users/2', {
            data : postData
        });
        expect(res.status()).toBe(201);
        const responBody = await res.json();
        console.log(responBody);
        expect(responBody.name).toBe('morpheus');
        expect(responBody.job).toBe('zion resident');
    });

    test('contoh DELETE', async ({}) => {
        const apiContext = await request.newContext();
        const postData = {
            name: "morpheus",
            job: "zion resident" 
        }
        const res = await apiContext.delete('https://reqres.in/api/users/2', {
            data : postData
        });
        expect(res.status()).toBe(204);
        // const responBody = await res.json();
        // console.log(responBody);
        
    });

});