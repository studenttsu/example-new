import { useRef, useState } from "react";

export default function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [position, setPosition] = useState('');

  const nameRef = useRef();

  function reset() {
    setName('');
    setPhoto('');
    setPosition('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(nameRef.current);

    const data = {
      name,
      photo,
      position
    };

    reset();
    onSubmit(data);
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input placeholder="ФИО" ref={nameRef} value={name} onChange={event => setName(event.target.value)} required />
      <input placeholder="Фотография" value={photo} onChange={event => setPhoto(event.target.value)} />
      <input placeholder="Позиция" value={position} onChange={event => setPosition(event.target.value)} required />
      <button>Добавить сотрудника</button>
    </form>
  );
}
