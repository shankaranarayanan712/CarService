const request = require('supertest');
const app = require('../server')

describe('Car Service Test cases', function () {
    
    it('Should throw error while accessing junk routes', async () => {
        const res = await request(app).get('/apidummy')
            .send()
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(404)
        expect(jsonResponse).toHaveProperty('message');
        expect(jsonResponse.message).toEqual('Oops the requested endpoint or type is not available, Please check the endpoint');
    }, 50000);

    it('Should throw error while adding any extra parameters to get car models', async () => {
        const res = await request(app).get('/api/car/model/query')
            .send()
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(404)
        expect(jsonResponse).toHaveProperty('message');
        expect(jsonResponse.message).toEqual('Oops the requested endpoint or type is not available, Please check the endpoint');
    }, 50000);

    it('Should get list of cars', async () => {
        const res = await request(app).get('/api/car/model')
        .send()
        expect(res.statusCode).toEqual(200)
        expect(res).toHaveProperty('body');
    }, 50000);

}); 
