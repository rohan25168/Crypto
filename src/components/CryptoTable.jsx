// src/components/CryptoTable.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

const CryptoTable = () => {
  const cryptos = useSelector((state) => state.crypto);

  return (
    <div className="table-container">
  <table className="crypto-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Logo</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>1h %</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>Market Cap</th>
        <th>24h Volume</th>
        <th>Circulating</th>
        <th>Max</th>
        <th>7D Chart</th>
      </tr>
    </thead>
    <tbody>
      {cryptos.map((c, i) => (
        <tr key={c.id}>
          <td>{i + 1}</td>
          <td><img src={c.logo} alt={c.name} className="crypto-logo" /></td>
          <td>{c.name}</td>
          <td>{c.symbol}</td>
          <td>${c.price}</td>
          <td className={+c.change1h >= 0 ? 'positive' : 'negative'}>{c.change1h}%</td>
          <td className={+c.change24h >= 0 ? 'positive' : 'negative'}>{c.change24h}%</td>
          <td className={+c.change7d >= 0 ? 'positive' : 'negative'}>{c.change7d}%</td>
          <td>${c.marketCap}</td>
          <td>${c.volume24h}</td>
          <td>{c.circulatingSupply}</td>
          <td>{c.maxSupply}</td>
          <td><img src={c.chart} alt="7D Chart" className="chart-img" /></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default CryptoTable;
