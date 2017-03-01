class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
    this.el.click(this.handleClick.bind(this));
  }

  render(){
    if (this.followState === 'unfollowed') {
      this.el.text('Follow');
    }
    else {
      this.el.text("Unfollow");
    }
  }

  handleClick(e){
    console.log(this);
    e.preventDefault();
    if (this.followState === 'unfollowed') {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: 'POST',
        success: () => {
          this.followState = "followed";
          this.render();
        }
      });
    } else if (this.followState === 'followed'){
      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: 'DELETE',
        dataType: 'json',
        success: () => {
          this.followState = "unfollowed";
          this.render();
        }
      });
    }

  }
}

module.exports = FollowToggle;
