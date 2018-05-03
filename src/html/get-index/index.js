// src/html/get-index/index.js
let arc = require('@architect/functions')
let data = require('@architect/data')
let layout = require('@architect/shared/views/layout')
let form = require('./_form')

// logic for authenticated visitors
async function authorized(req, res, next) {
  if (!req.session.account) {
    next()
  }
  else {
    // get all the notes
    let title = 'welcome home'
    let all = await data.notes.scan({})

    // wrangle template data
    let notes = all.Items.map(function addHref(note) {
      note.href = req._url(`/notes/${note.noteID}`)
      return note
    })
  
    // disambiguate URLs for envs
    let createUrl = req._url('/notes')
    let logoutUrl = req._url('/logout')
  
    // interpolate the template data 
    let body = form({url: createUrl, notes})
    let html = layout({body, title, url: logoutUrl})

    res({html})
  }
}

// shown for unauthenticated visitors
function unauthorized(req, res) {
  let title = 'welcome home'
  let body = '&nbsp;'
  let url = req._url('/login')
  let html = layout({body, title, url})
  res({html})
}

exports.handler = arc.html.get(authorized, unauthorized)
