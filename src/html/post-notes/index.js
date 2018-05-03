// src/html/post-notes/index.js
let arc = require('@architect/functions')
let data = require('@architect/data')
let Hashids = require('hashids')
let hashids = new Hashids

async function route(req, res) {
  try {
    let note = req.body
    note.accountID = req.session.account.accountID
    note.noteID = hashids.encode(Date.now())
    // save the note
    let result = await data.notes.put(note)
    // log it to stdout
    console.log(result)
  }
  catch(e) {
    console.log(e)
  }
  res({
    location: req._url('/')
  })
}

exports.handler = arc.html.post(route)
