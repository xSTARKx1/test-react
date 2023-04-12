import { useEffect, useState } from 'react';

import { Pagination, Sidebar, Table } from './Components';
import { customers } from './data';

import './App.scss';

const App = () => {
  const [allCustomers, setAllCustomer] = useState(customers);
  const [searchValue, setSearchValue] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setAllCustomer(
      customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          customer.company.toLowerCase().includes(searchValue.toLowerCase()) ||
          customer.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          customer.country.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div className='App'>
      <div
        id='nav-icon4'
        className={toggleMenu ? 'open' : ''}
        onClick={() => setToggleMenu((prevState) => !prevState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Sidebar toggleMenu={toggleMenu} />
      <section className='main'>
        <main>
          <h2 className='page-title'>Hello Evano 👋🏼,</h2>
          <div className='section-wrapper'>
            <div className='section'>
              <div className='title-wrapper'>
                <div>
                  <h3 className='title'>All Customers</h3>
                  <h4 className='sub-title'>Active Members</h4>
                </div>

                <form className='noSubmit'>
                  <input
                    className='noSubmit'
                    type='search'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </form>
              </div>

              <div className='table-container'>
                <Table customers={allCustomers} />
              </div>

              <div className='pagination-wrapper'>
                <div className='results'>
                  Showing data 1 to 8 of 256K entries
                </div>
                <Pagination totalCount={320} currentPage={1} pageSize={8} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default App;
