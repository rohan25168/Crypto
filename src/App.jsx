import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startMockSocket } from './mockSocket';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    startMockSocket(dispatch);
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;