import React from 'react';

function Subscribe() {
  return (
    <div>
      <div className="d-flex gap-3 justify-content-center pt-3">
          <div class="form-floating w-25">
            <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <button type='submit' className="get-btn">Get Started &rarr;</button>
        </div>
    </div>
  );
}

export default Subscribe;
