import { Sidebar } from './Components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <section>
        <main>
          <h2>Hello Evano!</h2>
          <div>
            <h3>All Customers</h3>
            <h4>Active members</h4>

            <input type='search' />
          </div>

          <table>
            <tr>
              <th>Customer name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>111-111-111</td>
              <td>qwe@mail.com</td>
              <td>United States</td>
              <td>Active</td>
            </tr>
          </table>

          <div>Showing data 1 to 8 of 256K entries</div>
        </main>
      </section>
    </div>
  );
};

export default App;
