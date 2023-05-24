export const validation = {

    validKey(oKey, pKey) {

        for (var value of pKey) {
            if (oKey.indexOf(value) == -1) {
                return false;
            }
        }
        return true;
    }
}

export const getKey = {

    obj_key(obj) {

        if (typeof obj === 'object') {
            return Object.keys(obj);
        }
    }
}