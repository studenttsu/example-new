import { useEffect, useState } from 'react';
import './App.scss';
import EmployeeForm from './components/EmployeeForm';
import Emplyees from './components/Employees/Employees';
import EmplyeeContext from './contexts/emplyeeContext';
import ApiService from './api/api-service';

const mockData = [
  {
    id: 1,
    name: 'Петрова Алина Сергеевна',
    photo: 'https://i.pinimg.com/736x/b1/a5/37/b1a5372c55784aa26d1f8fdf84f480fc.jpg',
    position: 'Визажист'
  },
  {
    id: 2,
    name: 'Иванова Анна Петровна',
    photo: 'https://i.pinimg.com/736x/b1/a5/37/b1a5372c55784aa26d1f8fdf84f480fc.jpg',
    position: 'Маникюр'
  },
  {
    id: 3,
    name: 'Александрова Ирина Олеговна',
    photo: 'https://i.pinimg.com/736x/b1/a5/37/b1a5372c55784aa26d1f8fdf84f480fc.jpg',
    position: 'Педикюр'
  }
];

function App() {
  const [employees, setEmployees] = useState(mockData);

  function appendEmployee(employee) {
    const lastId = employees[employees.length - 1];

    setEmployees([...employees, {
      id: lastId + 1,
      ...employee
    }]);
  }

  useEffect(() => {
    async function fetchData() {
      const employees = await ApiService.getMasters();
      setEmployees(employees);
    }

    fetchData();
  }, [])

  function removeEmployee(id) {
    setEmployees(employees.filter(e => e.id !== id));
  }

  return (
    <EmplyeeContext.Provider value={{removeEmployee}}>
      <div className="container">
        <h1>CRM</h1>

        <EmployeeForm onSubmit={appendEmployee} />
        <Emplyees employees={employees} />
      </div>
    </EmplyeeContext.Provider>
  );
}

export default App;
