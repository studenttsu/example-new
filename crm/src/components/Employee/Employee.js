import React, { useContext } from 'react';
import bem from 'easy-bem';
import cn from 'classnames';
import './Employee.scss';
import EmplyeeContext from '../../contexts/emplyeeContext';

const b = bem('employee');

export default function Employee({employee, className}) {
  const { photo, name, position } = employee;
  const _className = cn(b(), className);

  const context = useContext(EmplyeeContext);

  return (
    <div className={_className}>
      <div className={b('photo')}>
        {photo ? <img src={photo} /> : <img src="https://sun9-39.userapi.com/c855416/v855416705/156a5d/ZMkAmV52epk.jpg" />}
      </div>
      
      <div className={b('name')}>{name}</div>
      <div className={b('position')}>{position}</div>
      <button onClick={() => context.removeEmployee(employee.id)}>X</button>
    </div>
  )
}