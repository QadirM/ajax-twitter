const APIUtil = {
  followUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST'
    })
  ),

  unfollowUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    })
  ),

  searchUsers: (queryVal, success) => (
    $.ajax({
      url: `/users/search`,
      data: { query: queryVal },
      dataType: 'json',
      success: success
    })
  ),

  createTweet: (data) => (
    $.ajax({
      url: `/tweets`,
      data: data,
      method: 'POST',
      dataType: 'json'
    })
  )
};

module.exports = APIUtil;
