
const _ = require('lodash');

let data = [];

function add (name, content) {
  data.push({ name: name, content: content });
}

// Recursively calls clone on every value
// (in case value contains own object that clone would not reach)
function list () {
  return _.cloneDeep(data);
}

// Given some property (ex. name) and some property value ("Jason")
// create clone w only those values where property = indicate property value
function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

// Fake tweets
const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

// Log data
//console.log(data);

const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
let retList = []
let foundData = _.find(fakeLasts, (o) => {
    if (o.includes('er')) {retList.push(o)}
})
let filterData = _.filter(fakeLasts, (o) => {
    return o.includes('s');
})
//console.log(retList, filterData);

