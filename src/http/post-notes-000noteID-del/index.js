// src/http/post-notes-000noteID-del/index.js
let arc = require('@architect/functions')
let data = require('@architect/data')
let url = arc.http.helpers.url

async function route(req, res) {
  let noteID = req.params.noteID
  let accountID = req.session.account.accountID
  await data.notes.delete({
    noteID, accountID
  })
  res({
    location: url('/')
  })
}

exports.handler = arc.http(route)
