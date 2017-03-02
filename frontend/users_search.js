const APIUtil = require('./api_util');
const FollowToggle = require("./follow_toggle");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$ul = this.$el.children("ul");
    this.$input = this.$el.children("input");
    this.$input.on( "keyup", () => this.handleInput() );
  }

  handleInput() {
    console.log(this.$input.val());
    APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
  }

  renderResults(result){
    this.$ul.empty();
    result.forEach( user => {
      let button = $(`<button type="button" name="button"></button>`);
      button.data("initial-follow-state", user.followed ? "followed" : "unfollowed");
      button.data("user-id", user.id);
      new FollowToggle(button);
      let $li = $("<li></li>");
      let $a = $(`<a href="/users/${user.id}">${user.username}</a>`);
      $li.append($a);
      $li.append(button);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
