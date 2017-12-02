/**
 * API Version 1.0
 */

// Imports ------------------------------------------------------------------//
import express from '../../../node_modules/express';
import WX_Data from '../../wx_data/WX_Data';

// Variables ----------------------------------------------------------------//


// no need to create a new application just grab the router to add routes
const router = express.Router();

// Routes -------------------------------------------------------------------//

// default version 1.0 route
router.get('/',(req,res)=>{
    res.json({
        msg: 'end point root works'
    });
}); // end router.get(/)

router.post('/wx',(req,res)=>{
    const temp = Number.parseInt(req.body.temp);
    const humidity = Number.parseInt(req.body.humid);
    const baro = Number.parseInt(req.body.baro);
    let wx_data;
    if(temp && humidity && baro) {
        wx_data = new WX_Data(temp,humidity,baro);
        wx_data.write_to_db((err)=> {
            if(err) {
                res.send(err);
            }
            else res.send(200);
        })
    }
});

router.get('/wx',(req,res)=> {

});








// Exports ------------------------------------------------------------------//

export default router;