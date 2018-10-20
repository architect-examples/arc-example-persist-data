let arc = require('@architect/functions')
let data = require('@architect/data')
let layout = require('@architect/shared/views/layout')
let auth = require('@architect/shared/middleware/auth')
let form = require('./_form')
let url = arc.http.helpers.url

async function route(req, res) {
  let title = 'welcome home'
  // wrangle the data
  let noteID = req.params.noteID
  let accountID = req.session.account.accountID
  let note = await data.notes.get({noteID, accountID})
  note.href = url(`/notes/${noteID}`)
  // build out the templates
  let body = form(note)
  let path = url('/logout')
  let html = layout({body, title, path})
  // send the response
  res({html})
}

exports.handler = arc.http(auth, route)
