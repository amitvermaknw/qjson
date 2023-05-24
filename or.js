import { validation, getKey } from './lib/validator';

function _or(obj, param) {
    if ((typeof obj === 'object' || Array.isArray(obj)) && typeof param === 'object') {

        if (Array.isArray(obj)) {

            if (obj.length) {

                let pKey = getKey.obj_key(param),
                    oKey = getKey.obj_key(obj[0]),
                    pKeyLen = pKey.length,
                    res = '';

                switch (pKeyLen) {

                    case 2:
                        res = filter.len2(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 3:
                        res = filter.len3(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 4:
                        res = filter.len4(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 5:
                        res = filter.len5(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 6:
                        res = filter.len6(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 7:
                        res = filter.len7(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 8:
                        res = filter.len8(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 9:
                        res = filter.len9(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }

                    case 10:
                        res = filter.len10(pKey, oKey, obj, param);

                        if (Array.isArray(res)) {
                            return res;
                        }
                        else {
                            return "Given data is not correct."
                        }
                }

            }
            else {
                return "Input is incorrect."
            }

        }
        else {
            return "Input is incorrect."
        }
    }
    else {
        return "Input is incorrect!"
    }
}

const filter = {

    /*Condition with two parameter*/
    len2(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with three paramter
    len3(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with four paramter
    len4(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with five paramter
    len5(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with six paramter
    len6(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                    || val[`${pKey[5]}`] === param[`${pKey[5]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with seven paramter
    len7(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                    || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                    || val[`${pKey[6]}`] === param[`${pKey[6]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with eight paramter
    len8(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                    || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                    || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                    || val[`${pKey[7]}`] === param[`${pKey[7]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with nine paramter
    len9(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                    || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                    || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                    || val[`${pKey[7]}`] === param[`${pKey[7]}`]
                    || val[`${pKey[8]}`] === param[`${pKey[8]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with ten paramter
    len10(pKey, oKey, obj, param) {

        if (validation.validKey(oKey, pKey)) {

            const filteredObj = obj.map(function (val) {
                if (val[`${pKey[0]}`] === param[`${pKey[0]}`]
                    || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                    || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                    || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                    || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                    || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                    || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                    || val[`${pKey[7]}`] === param[`${pKey[7]}`]
                    || val[`${pKey[8]}`] === param[`${pKey[8]}`]
                    || val[`${pKey[9]}`] === param[`${pKey[9]}`]) {
                    return val;
                }
            });

            const filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    }
}

export default _or;