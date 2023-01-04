export const useLocalStorage = (key: string) => {
  const get = () => {
    const storage = localStorage.getItem(key);

    if (storage) return JSON.parse(storage);

    return null;
  };

  const set = (value: Array<string>) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  const deleteItem = () => {
    return localStorage.removeItem(key);
  };

  return {
    get,
    set,
    deleteItem,
  };
};
