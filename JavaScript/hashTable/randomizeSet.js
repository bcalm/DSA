
var RandomizedSet = function () {
    this.set = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.includes(val)) {
        return false;
    }
    this.set.push(val);
    console.log(this.set, val)
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set.indexOf(val) !== -1) {
        this.set.splice(this.set.indexOf(val), 1)
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.set[Math.ceil(Math.random() * this.set.length)]
};

val = 2;
var obj = new RandomizedSet()
var param_1 = obj.insert(val)
obj.insert(2)
obj.insert(3)
obj.insert(4)
var param_2 = obj.remove(val)
var param_3 = obj.getRandom()
