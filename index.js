var qjson = {

    query(obj, param, cond) {

        if ((typeof obj === 'object' || Array.isArray(obj)) && typeof param === 'object' && typeof cond === 'string') {

            if (Array.isArray(obj)) {

                if (obj.length) {

                    var pKey = getKey.obj_key(param),
                        oKey = getKey.obj_key(obj[0]),
                        pKeyLen = pKey.length;

                    switch (pKeyLen) {

                        case 2:
                            var res = filter.len2(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 3:
                            var res = filter.len3(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 4:
                            var res = filter.len4(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 5:
                            var res = filter.len5(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 6:
                            var res = filter.len6(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 7:
                            var res = filter.len7(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 8:
                            var res = filter.len8(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 9:
                            var res = filter.len9(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;

                        case 10:
                            var res = filter.len10(pKey, oKey, cond, obj, param);

                            if(Array.isArray(res)) {
                                return res;
                            }
                            else {
                                return "Given data is not correct."
                            }
                            break;
                    }

                }
                else {
                    return "Input is incorrect."
                }

            }
            else {

            }
        }
        else {
            return "Input is incorrect!"
        }
    }
};

var filter = {

    /*Condition with two parameter*/
    len2(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with three paramter
    len3(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with four paramter
    len4(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with five paramter
    len5(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with six paramter
    len6(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        && val[`${pKey[5]}`] === param[`${pKey[5]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        || val[`${pKey[5]}`] === param[`${pKey[5]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with seven paramter
    len7(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        && val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        && val[`${pKey[6]}`] === param[`${pKey[6]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        || val[`${pKey[6]}`] === param[`${pKey[6]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with eight paramter
    len8(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        && val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        && val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        && val[`${pKey[7]}`] === param[`${pKey[7]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        || val[`${pKey[7]}`] === param[`${pKey[7]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with nine paramter
    len9(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        && val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        && val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        && val[`${pKey[7]}`] === param[`${pKey[7]}`]
                        && val[`${pKey[8]}`] === param[`${pKey[8]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        || val[`${pKey[7]}`] === param[`${pKey[7]}`]
                        || val[`${pKey[8]}`] === param[`${pKey[8]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    },

    //Condition with ten paramter
    len10(pKey, oKey, cond, obj, param) {
        
        if(validation.validKey(oKey, pKey)) {

            var filteredObj = obj.map(function (val) {
                if(cond === 'AND') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        && val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        && val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        && val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        && val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        && val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        && val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        && val[`${pKey[7]}`] === param[`${pKey[7]}`]
                        && val[`${pKey[8]}`] === param[`${pKey[8]}`]
                        && val[`${pKey[9]}`] === param[`${pKey[9]}`]) 
                    {
                        return val;
                    }
                }
                else if(cond === 'OR') {
                    if(val[`${pKey[0]}`] === param[`${pKey[0]}`] 
                        || val[`${pKey[1]}`] === param[`${pKey[1]}`]
                        || val[`${pKey[2]}`] === param[`${pKey[2]}`]
                        || val[`${pKey[3]}`] === param[`${pKey[3]}`]
                        || val[`${pKey[4]}`] === param[`${pKey[4]}`]
                        || val[`${pKey[5]}`] === param[`${pKey[5]}`]
                        || val[`${pKey[6]}`] === param[`${pKey[6]}`]
                        || val[`${pKey[7]}`] === param[`${pKey[7]}`]
                        || val[`${pKey[8]}`] === param[`${pKey[8]}`]
                        || val[`${pKey[9]}`] === param[`${pKey[9]}`]) 
                    {
                        return val;
                    }
                }  
            });

            var filtered = filteredObj.filter(function (el) {
                return el != undefined;
            });

            return filtered;
        }
        else {
            return false;
        }
    }
}

var validation = {
    
    validKey(oKey, pKey) {

        for(var value of pKey) {
            if(oKey.indexOf(value) == -1) {
                return false;
            }
        }
        return true;
    }
}

var getKey = {

    obj_key(obj) {

        if (typeof obj === 'object') {
            return Object.keys(obj);
        }
    }
}