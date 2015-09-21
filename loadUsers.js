function loadUsers(userIds, load, done) {
  var users = [];
  var completed = 0;

  var results = userIds.map(user, function(id, users){
    load(id, function(response){
      users[id] = response;
      if (++completed === userIds.length) return done(users)
    });
  });
}
module.exports = loadUsers