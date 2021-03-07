import React from 'react';
import { Link } from 'react-router-dom';

/* Styling */
import './header.styles.scss';

/* Assets */
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <div className="header">
      <Link to="/" className="link-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to='/signin' className='option'>SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;