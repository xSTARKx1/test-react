import { Logo } from '../index';
import userImage from '../../assets/img.png';
import { navLinks } from '../../data';

import './index.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <nav>
        <ul>
          {navLinks.map((link) => {
            const { name, id, isExpanded } = link;
            return (
              <li key={id} className='link'>
                <div className={`icon icon-${name.toLowerCase()}`} />
                {name}

                {isExpanded && <i className='menu-arrow' />}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className='user-info'>
        <img src={userImage} alt='user' className='image' />
        <div>
          <h2 className='name'>Evano</h2>
          <h3 className='position'>Project Manager</h3>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
