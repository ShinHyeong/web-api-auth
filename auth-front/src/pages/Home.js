import React from 'react';
import { Link} from 'react-router-dom';

function home() {
  return <div>
    <h3>Welcome to my homepage ;)</h3>
      <nav>
        <ul>
          <li><Link to='/login'>Login page</Link></li>
          <li><Link to='/signup'>SignUp page</Link></li>
        </ul>
      </nav>
  </div>;
}

export default home;