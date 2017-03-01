const FollowToggle = require('./follow_toggle');
const testArray = [];

const thingToDo = () => {
  $('.follow-toggle').each( (i, $el) => {
    testArray.push(new FollowToggle($el));
  });
  console.log(testArray);
};

$(thingToDo);
