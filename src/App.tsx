import * as React from 'react';

import { useTempRecords } from './useTempRecords';
export const App = () => {
  const { allRecords, addRecord } = useTempRecords<string>(3000);
  React.useEffect(() => {
    for (let i = 0; i < 10; i++) {
      addRecord(i, 'entry number ' + i, { TTL: i * 1000 });
    }
  }, []);

  return (
    <div>
      {allRecords().map(([key, value]) => {
        return <p key={key}>{`${key}, ${value}`}</p>;
      })}
    </div>
  );
};
