@app
testapp

@html
get /
get /notes/:noteID

post /login
post /logout
post /notes
post /notes/:noteID
post /notes/:noteID/del

@tables
accounts
  accountID *String

notes
  accountID *String
  noteID **String
