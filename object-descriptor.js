'use strict';

String.prototype.key1 = 'string';
Object.prototype.key2 = 'object';
Array.prototype.key3 = 'array';

const proto = {
  protoKey: 'protoValue',
}

const obj = Object.create(proto, { name: { value: 'AK', enumerable: false } });

for (const k in obj) {
  console.log(k);
}
/* Output: protoKey
           key2

If enumerable set to true then
 Output: name
         protoKey
         key2
*/


// =================================================================

// Accessor properties
const obj1 = {
  name: 'A',
  get lname() {
    return this.name;
  },
  set lname(lastName) {
    return this.name += lastName;
  },
  f() {
    return this.name.toUpperCase();
  }
}
console.log(obj1);
// Output: { name: 'A', lname: [Getter/Setter], f: [Function: f] }
console.log(obj1.f());
// Output: A
console.log(obj1.lname);
// Output: A
obj1.lname = 'K';
console.log(obj1.lname)
// Output: AK
console.log(obj1.name)
// Output: AK

// =================================================================

// How to set/modify a property attribute?

const obj2 = {};

Object.defineProperty(obj2, 'name', {
  value: 'Kaushik',
  enumerable: false,
});

console.log(obj2.name);
console.log(obj2.hasOwnProperty('name'));
console.log(Object.keys(obj2));
console.log(obj2);
/*
Output: Kaushik
        true
        []
        {}
*/
Object.defineProperty(obj2, 'lname', {
  value: 'Kaushik',
  enumerable: true,
});


console.log(obj2.lname);
console.log(obj2.hasOwnProperty('lname'));
console.log(Object.keys(obj2));
console.log(obj2);

/*
Output: Kaushik
        true
        [ 'lname' ]
        { lname: 'Kaushik' }
*/

const map = (object, cb) => Object.fromEntries(Object.entries(object).map(cb));

map(obj2, (el) => { console.log(el); return el; })


/*
Accessing Property Attribute
*/

const obj3 = {
  x: 5,
  y: 6
};

const desc = Object.getOwnPropertyDescriptor(obj3, 'x');
console.log(desc)
/*
{
  value: 5,
  writable: true,
  enumerable: true,
  configurable: true
}
*/

const desc2 = Object.getOwnPropertyDescriptor(obj2, 'name');
console.log(desc2);
/*
{
  value: 'Kaushik',
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const allDesc = Object.getOwnPropertyDescriptors(obj3);
console.log(allDesc);
/*
{
  x: {
    value: 5,
    writable: true,
    enumerable: true,
    configurable: true
  },
  y: {
    value: 6,
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/