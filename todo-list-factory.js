function makeToDos(owner, toDos) {
   return {
     name: owner, 
     toDo: toDos
   }
};

function generate.Html() = {
  //need to figure out how to put toDos into lists? maybe ```'<ul><li>' + toDos + '</li>', i++``` or something? 
  var addList = document.createElement("ul");
  var newToDo = document.createToDo("toDo");
  addList.appendChild(createToDo);
  //God. I need an HTML thing don't I to use 'document'?? 
}

makeToDos.generateHtml(owner, toDos); 


//owner = string of the name of the owner of the to do list
//toDo is an array of strings with stuff that needs to be done
//needs method called .generateHtml which should return a string representing a <ul>

/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/


// tests

function testIt() {
  var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
  var owner = 'Steve';
  var myToDos = makeToDos(owner, toDos);
  if (!myToDos || !myToDos instanceof Object) {
    console.error('FAILURE: `makeToDos` must return an object');
    return;
  }
  
  var expectedKeys = ['owner', 'toDos', 'generateHtml'];
  if (
    Object.keys(myToDos).length !== expectedKeys.length ||
    !expectedKeys.every(function(key) {
      return key in myToDos;
    })
  ) {
    console.error(
      'FAILURE: expected `makeToDos` to have a `.toDos` property ' + 
      'whose value is an array of todo items');
    return;
  }
  
  if (myToDos.owner !== owner) {
    console.error(
     'FAILURE: expected `makeToDos` to return an object with `.owner` '+
     'set to value passed in for `owner`, in this case ' + owner);
    return;
  }
  if (!toDos.every(function(toDo) {
    return myToDos.toDos.find(function(_toDo) {
      return _toDo === toDo;
    })
  })) { 
    console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
  }
  
  var element = $(myToDos.generateHtml());

  if (element.length !== 1) {
    console.error(
      'FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
      'method that returns an unordered list');
    return;
  }

  if (!toDos.every(function(toDo) {
    return element.find('li:contains("' + toDo + '")').length === 1;
  })) {
    console.error('FAILURE: generateHtml must return li element for every todo');
    return
  }

  console.log('SUCCESS: `makeToDos` is working');
  
}

testIt();