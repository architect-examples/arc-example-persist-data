var arc = require('@architect/functions')
var data = require('@architect/data')

async function route(req, res) {
  var result = await data.notes.put(req.body)
  res({
    location: req._url('/')
  })
}

exports.handler = arc.html.post(route)
