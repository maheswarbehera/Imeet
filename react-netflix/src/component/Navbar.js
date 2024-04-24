import React from 'react';
import Language from './Language';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container nav-position">
    <a class="navbar-brand netflix" href="/">Netflix</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end nav-position" id="navbarSupportedContent">
      <div class="d-flex gap-3" role="search">
       <Language/>
        <button class="custom-btn">Sign in</button>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
