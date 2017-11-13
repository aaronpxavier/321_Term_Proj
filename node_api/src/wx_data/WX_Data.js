import wx_model from './wx_model';

export default class WX_Data {
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
            this._wx_data_json = {
                temp:this._temp,
                humid:this._humid,
                baro:this._baro,
            }
            this._wx_data = new wx_model(this._wx_data_json);
        } else {
            throw new Error('One or more parameters are null');
        }
    }

    /**
     * fn takes 3 arguments
     * @param temp must be declared and defined with valid number.
     * @param humid must be declared and defined with valid number.
     * @param baro must be declared and defined with valid number
     * @return fn returns no value. member property _wx_data gets set model object
     */
    set_data(temp,humid,baro) {
        if(temp && humid && baro) {
            this._temp = temp;
            this._humid = humid;
            this._baro = baro;
            this._wx_data_json = {
                temp:temp,
                humid:humid,
                baro:baro,
            }
            this._wx_data = new wx_model(this._wx_data_json);
        } else throw new Error('One or more parameters are null');

    }

    /**
     * fn takes no args
     * @returns json object that contains temp, humid, and baro.
     */
    get_data() {
        let wx_data;
        if(this._wx_data_json) {
            wx_data = this._wx_data_json;
        } else {
            throw new Error('Requesting wx data before data is set');
        }
        return wx_data;
    }

    /**
     *
     * @param call_back must be declared and defined by a fn that takes one param an error obj;
     * @returns calls callback fn when db operation completes
     */
    write_to_db(call_back) {
        this._wx_data.save((err)=>{
            call_back(err);
        })
    }

}
