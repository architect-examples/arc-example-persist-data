let arc = require('@architect/functions')

function route(req, res) {
  let location = req._url('/')
  let session = {}
  let authorized = req.body.email === 'b@brian.io' && req.body.password === 'lolwut'
  if (authorized) {
    session.account = {name: 'brianleroux', accountID: 'fake-id'}
  }
  res({session, location})
}

exports.handler = arc.html.post(route)
