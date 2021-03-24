import { useEffect, useState } from 'react';
import Masters from './components/Masters/Masters';
import MastersForm from './components/MastersForm';
import MastersContext from './contexts/mastersContext';
import ApiService from './api/api-service';
import './App.scss';

function App() {
  const [masters, setMaters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const masters = await ApiService.getMasters();
      setMaters(masters);
    }

    fetchData();
  }, []);

  function createMaster(master) {
    const { id } = masters[masters.length - 1];

    setMaters(masters.concat([{
      ...master,
      id: id + 1
    }]));
  }

  function removeMaster(id) {
    setMaters(masters.filter(m => m.id !== id));
  }

  return (
    <div className="container">
        <div className="app">
          <header>
            <h1>Beauty Saloon</h1>
          </header>
        </div>

        <MastersForm onCreate={createMaster} />
        <br />

        <MastersContext.Provider value={{ removeMaster }}>
          {masters.length === 0 ? <p>Нет данных</p> : <Masters masters={masters} />}          
        </MastersContext.Provider>
      </div>
  );
}

export default App;
