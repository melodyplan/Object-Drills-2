/*I'm sick and going to call the night early. This isn't done yet*/


var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
  studentData.forEach(function(students, status) {
    for 
      if status == 'Withdrawn'; return /*I stopped here */
}


/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!

*/

// tests


function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology'
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics'
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science'
    }
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return
  }

  for (var i=0; i<testData.length; i++) {
    var result = results.find(function(_result) {
      return (
        _result.name === testData[i].name &&
        _result.course === testData[i].course &&
        _result.status === 'In Summer school');
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school"');
      return
    }
  }
  console.info('SUCCESS: `enrollSummerSchool` is working');
}

testIt();