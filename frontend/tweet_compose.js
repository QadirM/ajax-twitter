const APIUtil = require("./api_util");

class TweetCompose {
  constructor(form) {
    this.$form = $(form);
    this.$form.on( "submit", (e) => this.submit(e) );
  }

  submit(e){
    e.preventDefault();

    APIUtil.createTweet(this.$form.serializeJSON())
    .then(this.handleSuccess.bind(this))
    .fail(() => console.log("what!") );

    this.disableInputs();
  }

  disableInputs() {
    $(":input").prop("disabled", true);
  }

  handleSuccess(tweet) {
    this.clearInput();
    $(":input").each( (i, $input) => {
      $($input).prop("disabled", false);
    });
    $("#feed").append(tweet);
  }

  clearInput() {
    $(":input").each( (i, $input) => {
      $($input).val("");
    });
  }
}

module.exports = TweetCompose;
