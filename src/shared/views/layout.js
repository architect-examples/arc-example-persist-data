// src/shared/layout.js
let auth = require('./_header')

module.exports = function layout(params={}) {
  let body = params.body || 'hello world'
  let title = params.title || '@architect/data demo'
  let url = params.path
  return `<!doctype HtMl>
<html lang=en>
<head>
<meta charset=utf-8>
<meta name=viewport content=width=device-width,initial-scale=1,shrink-to-fit=no>
<link rel=stylesheet 
  href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css
  integrity=sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4 
  crossorigin=anonymous>
<title>${title}</title>
</head>
<body>
${auth({url})}
${body}
</body>
</html>`
}
