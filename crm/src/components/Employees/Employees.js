import bem from 'easy-bem';
import React from 'react';
import Employee from '../Employee/Employee';
import './Employees.scss';

const b = bem('employees');

export default function Emplyees({ employees }) {
  return (
    <div className={b()}>
      {employees.map(e => <Employee className={b('item')} employee={e} key={e.id} />)}      
    </div>
  )
}