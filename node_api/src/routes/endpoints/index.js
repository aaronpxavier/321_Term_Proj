/**
 * API Version 1.0
 */

// Imports ------------------------------------------------------------------//
import express from '../../../node_modules/express';


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







// Exports ------------------------------------------------------------------//

export default router;