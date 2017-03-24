// running the function with `objectA` and `expectedKeys`
// should return `true`
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

var contains = function validateKeys(object, expectedKeys) {
  var findexpectedKeys = 'id', 'name', 'age', 'city';
  var indexOf;
 if (objectA.prototype.indexOf === 'function') {
     //Now what
   indexOf = function(expectedKeys) {
     var = i = -1, index = -1;
     
     for (i=0; i < this.length; i++) {
       var item = this[i];
       //good lord
       if ((item !== item) || item === NaN) {
         index = i;
         break;
       }
     }
     
     return index;
   };
 }
 return indexOf.call(this, expectedKeys) > -1;
};
   //( there's an index here there has to also be a container of some kind <-- these are notes to myself before I wrote shit)
    // { 
  // return true; 
// }
// else  {
  // return false; 
// }

//}
     


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt()