var makeStudentReport function(data) = [ 
  {
    name: 'Johnny Robot',
    grade: 'C'
  },
  {
    name: 'James Bond',
    grade: 'A'
  },
  {
    name: 'Leia Organa',
    grade: 'A'
  },
  {
    name: 'Ann Perkins',
    grade: 'B'
  },
];

makeStudentReport.forEach(function(data) {
  console.log(
    '[name]: ' + data.name + ', [grade]: ' + data.grade
    );
});


/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/


// tests

function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
