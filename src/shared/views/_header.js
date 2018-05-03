// src/shared/_auth.js
module.exports = function _auth({url}) {
  if (url.includes('logout')) {
    return `
<form action=${url} method=post class="float-right m-4">
  <button type=submit class="btn btn-primary">Logout</button>
</form>`
  }
  else {
    return `
<div class="card mt-5 mr-auto ml-auto mb-1 w-25">
  <div class=card-body>
    
    <form action=${url} method=post>
      <div class=form-group>
        <label for=email>Email address</label>
        <input type=email class=form-control name=email placeholder="Enter email">
      </div>
      <div class=form-group>
        <label for=password>Password</label>
        <input type=password class=form-control name=password placeholder="Password">
      </div>
      <button type=submit class="btn btn-primary float-right">Login</button>
    </form>

  </div>
</div>
`
  }
}

