// src/http/post-logout/index.js
let arc = require('@architect/functions')
let url = arc.http.helpers.url

function route(req, res) {
  res({
    session: {},
    location: url('/')
  })
}

exports.handler = arc.http(route)
