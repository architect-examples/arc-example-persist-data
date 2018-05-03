module.exports = function auth(req, res, next) {
  if (req.session.account) next()
  else res({location:req._url('/')})
}
