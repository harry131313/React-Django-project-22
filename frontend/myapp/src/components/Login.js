import React from 'react'

const Login = () => {
  return (
    <div className='container app-home border border-grey rounded-3 '>
        
        <form className='mt-5' >
    <h1 className='h_1 '>Login</h1>
  <div class="form-outline mb-4 mt-3">
    <input type="email" id="form2Example1" class="form-control" placeholder='Email address' />
    {/* <label class="form-label" for="form2Example1">Email address</label> */}
  </div>


  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" placeholder='Password' />
    {/* <label class="form-label" for="form2Example2">Password</label> */}
  </div>

 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
   
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="/register">Register</a></p>

  </div>
</form>
    </div>
  )
}

export default Login