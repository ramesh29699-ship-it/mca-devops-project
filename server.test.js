// backend/server.test.js
const request = require('supertest');
const app = require('./server');

describe('GET /api/health', () => {
    it('should return a 200 OK status', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
    });
});