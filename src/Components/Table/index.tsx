import { FC } from 'react';

import { Customer } from '../../types';

import './index.scss';

interface Props {
  customers: Customer[];
}

const Table: FC<Props> = (props) => {
  const { customers } = props;

  return (
    <table className='table'>
      <thead className='t-head'>
        <tr>
          <th className='header-row' style={{ width: '172px' }}>
            Customer Name
          </th>
          <th className='header-row' style={{ width: '131px' }}>
            Company
          </th>
          <th className='header-row' style={{ width: '156px' }}>
            Phone Number
          </th>
          <th className='header-row' style={{ width: '207px' }}>
            Email
          </th>
          <th className='header-row'>Country</th>
          <th className='header-row'>Status</th>
        </tr>
      </thead>
      <tbody className='t-body'>
        {customers.map((customer) => {
          const { id, name, company, phone, email, country, status } = customer;

          return (
            <tr key={id} className='tr'>
              <td className='row'>{name}</td>
              <td className='row'>{company}</td>
              <td className='row'>{phone}</td>
              <td className='row'>{email}</td>
              <td className='row'>{country}</td>
              <td className='row'>
                {status ? (
                  <div className='status'>Active</div>
                ) : (
                  <div className='status false'>Inactive</div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
