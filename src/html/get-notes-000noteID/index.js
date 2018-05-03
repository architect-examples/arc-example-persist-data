let arc = require('@architect/functions')
let data = require('@architect/data')
let layout = require('@architect/shared/views/layout')
let auth = require('@architect/shared/middleware/auth')

async function route(req, res) {
  let title = 'welcome home'
  let noteID = req.params.noteID
  let accountID = req.session.account.accountID
  let note = await data.notes.get({noteID, accountID})
  let body = `<pre>${JSON.stringify(note, null, 2)}</pre>`
  let url = req._url('/logout')
  let html = layout({body, title, url})
  res({html})
}

exports.handler = arc.html.get(auth, route)
