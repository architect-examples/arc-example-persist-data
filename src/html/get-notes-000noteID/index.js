let arc = require('@architect/functions')
let auth = require('@architect/shared/middleware/auth')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({html:`hello world`})
}

exports.handler = arc.html.get(auth, route)
