/**
 * Express Setup Test
 */

import request from '../../node_modules/supertest';
import app from '../app';



describe('Test the root path of our API Server',()=>{
    it('Responds to the API root path with JSON',(done)=>{
        return request(app)
            .get('/api')
            .expect('Content-Type',/json/)
            .expect(200,{
                msg: 'end point root works'
            },done);
    }); // end it
}); // end describe


