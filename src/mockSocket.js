import { updateCrypto } from './cryptoSlice';

export function startMockSocket(dispatch, interval = 1500) {
  setInterval(() => {
    const id = Math.floor(Math.random() * 5);
    const randomChange = () => (Math.random() * 2 - 1).toFixed(2);

    dispatch(
      updateCrypto({
        id,
        data: {
          price: (Math.random() * 50000).toFixed(2),
          change1h: randomChange(),
          change24h: randomChange(),
          change7d: randomChange(),
          volume24h: (Math.random() * 1e10).toFixed(0),
        },
      })
    );
  }, interval);
}