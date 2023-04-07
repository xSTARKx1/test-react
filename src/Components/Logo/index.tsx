import logo from '../../assets/logo.svg';

import './index.scss';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <img src={logo} />
      <div className='logo-name'>
        Dashboard <span className='version'>v.01</span>
      </div>
    </div>
  );
};

export default Logo;
