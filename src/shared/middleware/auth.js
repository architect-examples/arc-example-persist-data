let arc = require('@architect/functions')
let url = arc.http.helpers.url

module.exports = function auth(req, res, next) {
  if (req.session.account) next()
  else res({location:url('/')})
}
