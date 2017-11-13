import mongoose from '../../node_modules/mongoose';
const SCHEMA = mongoose.Schema;
const WX_DATA_SCHEMA = new SCHEMA({
    temp: {type: Number},
    humid: {type: Number},
    baro: {type: Number},
    date: {
        type: Date,
        default: Date.now
    }
});

const WX_MODEL = mongoose.model('WX_DATA', WX_DATA_SCHEMA);

export default WX_MODEL;