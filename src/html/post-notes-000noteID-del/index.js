// src/html/post-notes-000noteID-del/index.js
let arc = require('@architect/functions')
let data = require('@architect/data')

async function route(req, res) {
  let noteID = req.params.noteID
  let accountID = req.session.account.accountID
  await data.notes.delete({
    noteID, accountID
  })
  res({
    location: req._url('/')
  })
}

exports.handler = arc.html.post(route)
