import mongoose from '../mongoose';
import wx_model from 'wx_model';



export default class Users {

    /**
     * constructor takes 3 arguments
     * @param temp must be declared and defined with valid number.
     * @param humid must be declared and defined with valid number.
     * @param baro must be declared and defined with valid number
     * @return fn returns no value
     */
    constructor(temp,humid,baro) {
        if(temp && humid && baro) {
            this._temp = temp;
            this._humid = humid;
            this._baro = baro;
            this.wx_model = new wx_model();
        } else {
            throw new Error('One or more parameters are null');
        }
    }

    /**
     * fn takes 3 arguments
     * @param temp must be declared and defined with valid number.
     * @param humid must be declared and defined with valid number.
     * @param baro must be declared and defined with valid number
     * @return fn returns no value.
     */
    set_data(temp,humid,baro) {
        if(temp && humid && baro) {
            this._temp = temp;
            this._humid = humid;
            this._baro = baro;
        } else throw new Error('One or more parameters are null');

    }

    /**
     * fn takes no args
     * @returns json object that contains temp, humid, and baro.
     */
    get_data() {
        if(this._temp && this._humid && this._baro) {
            wx_data = {
                temp:this._temp;
                humid:this._humid;
                baro:this._baro;
            }
        } else {
            throw new Error('Requesting wx data before data is set');
        }
        return wx_data;
    }

    write_to_db() {

    }

}
