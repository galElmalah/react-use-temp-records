import * as React from 'react';

type EntryKey = number | string;

interface RecordOptions {
  TTL?: number;
}

interface UseTempRecordsAPI<T> {
  addRecord(key: EntryKey, value: T | boolean, options?: RecordOptions);
  hasRecord(key: EntryKey): boolean;
  removeRecord(key: EntryKey);
  allRecords(): [EntryKey, T | boolean][];
  getRecord(key: EntryKey): T | boolean;
  hasRecords(): boolean;
}

export function useTempRecords<T>(TTL: number = 100): UseTempRecordsAPI<T> {
  const [records, setRecords] = React.useState(
    new Map<EntryKey, T | boolean>(),
  );

  const _timeoutIds: number[] = [];

  React.useEffect(() => {
    const cleanup = () => {
      if (_timeoutIds.length > 0) {
        _timeoutIds.forEach(id => clearTimeout(id));
      }
    };
    return cleanup;
  }, []);

  const _remove = (key: EntryKey) => {
    records.delete(key);
    setRecords(prevRecords => {
      prevRecords.delete(key);
      return new Map(prevRecords);
    });
  };

  const getRecord = (key: EntryKey): T | boolean => records.get(key);

  const getTTL = (options: RecordOptions) => (options && options.TTL) || TTL;

  const addRecord = (
    key: EntryKey,
    value: T | boolean = true,
    options: RecordOptions,
  ) => {
    setRecords(preRecords => {
      return new Map(preRecords).set(key, value);
    });
    _timeoutIds.push(window.setTimeout(() => _remove(key), getTTL(options)));
  };

  const hasRecords = (): boolean => records.size !== 0;

  const hasRecord = (key: EntryKey): boolean => {
    return records.has(key);
  };

  const allRecords = (): [EntryKey, T | boolean][] => {
    return Array.from(records.entries());
  };

  return {
    addRecord,
    hasRecord,
    removeRecord: _remove,
    allRecords,
    getRecord,
    hasRecords,
  };
}
