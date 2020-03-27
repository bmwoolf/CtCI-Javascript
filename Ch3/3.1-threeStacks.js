// use a single array to implement three stacks

// [[queue], [stack], [stack]]?

function ThreeInOne () {
    this.container = [];
    this.middleBottom = 0;
    this.middleTop = 0;
}
 
// push 
ThreeInOne.prototype.push1 = function (value) {
    // add to the beginning of the container- is the first array a queue?
    this.container.unshift(value);
    // increment the other two start positions for the other arrays
    this.middleBottom++;
    this.middleTop++;
}

ThreeInOne.prototype.push2 = function (value) {
    // insert value at the middleTop
    console.log('this.middleBottom',this.middleBottom)
    console.log('this.middleTop',this.middleTop)
    this.container.splice(this.middleTop, 0, value); // cannot use push because it is the middle array
    this.middleTop++;
    console.log('this.middleTop',this.middleTop)
}

ThreeInOne.prototype.push3 = function (value) {
    this.container.push(value);
}

// pop
ThreeInOne.prototype.pop1 = function (value) {
    if (this.isEmpty1()) {
        return 'array 1 is empty';
    }
    // remove the first element of the array
    let answer = this.container.shift();
    if (this.middleBottom > 0) {
        this.middleBottom--;
        this.middleTop--;
    }
    return answer;
}

ThreeInOne.prototype.pop2 = function () {
    if (this.isEmpty2()) {
        return 'array 2 is empty';
    }
    // find the last element in the middle array
    let answer = this.container[this.middleTop - 1];
    
    // remove that last element
    this.container.splice(this.middleTop - 1, 1);
    if (this.middleBottom < this.middleTop) {
        this.middleTop--;
    }
    return answer;
}

ThreeInOne.prototype.pop3 = function (value) {
    if (this.isEmpty3()) {
        return 'array 3 is empty';
    }
    // pop returns the value removed
    return this.container.pop(value);
}

// peek
ThreeInOne.prototype.peek1 = function () {
    return this.isEmpty1() ? 'array 1 is empty' : this.container[0];
}

ThreeInOne.prototype.peek2 = function () {
    return this.isEmpty2() ? 'array 2 is empty' : this.container[this.middleTop - 1]; // return last element if not empty
}

ThreeInOne.prototype.peek3 = function () {
    return this.isEmpty3() ? 'array 3 is empty' : this.container[this.container.length - 1];
}

// is empty
ThreeInOne.prototype.isEmpty1 = function () {
    // remember it's a reverse array, so the first index is at the bottom of the middle array (wouldn't it be -1?)
    return this.middleBottom === 0;
}

ThreeInOne.prototype.isEmpty2 = function () {
    // meaning the first index is the last one as well
    return this.middleBottom === this.middleTop;
}

ThreeInOne.prototype.isEmpty3 = function () {
    return this.middleTop === this.container.length;
}

// add a bunch
let arr = new ThreeInOne();
arr.push1('1a');
arr.push1('1b');
arr.push1('1c');
arr.push2('2a');
arr.push2('2b');
arr.push2('2c');
arr.push3('3a');
arr.push3('3b');
arr.push3('3c');

const remove1 = arr.pop1();
const remove2 = arr.pop2();
const remove3 = arr.pop3();

const peek1 = arr.peek1();
const peek2 = arr.peek2();
const peek3 = arr.peek3();

const remove1a = arr.pop1();
const remove2a = arr.pop2();
const remove3a = arr.pop3();

const isEmptya1 = arr.isEmpty1();
const isEmptya2 = arr.isEmpty2();
const isEmptya3 = arr.isEmpty3();

const remove1b = arr.pop1();
const remove2b = arr.pop2();
const remove3b = arr.pop3();

const remove1c = arr.pop1();
const remove2c = arr.pop2();
const remove3c = arr.pop3();

const isEmptyb1 = arr.isEmpty1();
const isEmptyb2 = arr.isEmpty2();
const isEmptyb3 = arr.isEmpty3();

console.log('arr.container',arr.container);
console.log('arr.middleBottom',arr.middleBottom);
console.log('arr.middleTop',arr.middleTop);
console.log(remove1, remove2, remove3);
console.log(peek1, peek2, peek3);
console.log(remove1a, remove2a, remove3a);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(remove1b, remove2b, remove2c);
console.log(remove1c, remove2c, remove3c);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);