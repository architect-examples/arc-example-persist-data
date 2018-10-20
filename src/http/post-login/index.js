let arc = require('@architect/functions')
let url = arc.http.helpers.url

function route(req, res) {
  let location = url('/')
  let session = {}
  let authorized = req.body.email === 'admin@admin.com' && req.body.password === 'admin'
  if (authorized) {
    session.account = {name: 'brianleroux', accountID: 'fake-id'}
  }
  res({session, location})
}

exports.handler = arc.http(route)
