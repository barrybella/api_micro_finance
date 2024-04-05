controllers/profile.js [4:20]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports.profileRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        return res.status(200).json(user);
      });
  }

};  
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/profiles.js [5:21]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports.profileRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        return res.status(200).json(user);
      });
  }

};  
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



