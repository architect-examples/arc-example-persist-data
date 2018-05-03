// src/html/get-index/_form

function note({title, body, href}) {
  return `
<div class="card mt-4 mr-auto ml-auto mb-1 w-25">
  <div class=card-header><a href=${href}>${title}</a></div>
  <div class=card-body>${body}</div>
</div>
`
}

module.exports = function form({url, notes}) {
  return `
<div class="card mt-5 mr-auto ml-auto mb-1 w-25">
  <div class=card-body>
    <form action=${url} method=post>
      <div class=form-group>
        <input type=text class=form-control name=title placeholder="Enter title" required>
      </div>
      <div class=form-group>
        <textarea class=form-control name=body placholder="Enter text"></textarea>
      </div>
      <button type=submit class="btn btn-primary float-right">Save</button>
    </form>
  </div>
</div>

${notes.map(note).join('\n')}
`
}
