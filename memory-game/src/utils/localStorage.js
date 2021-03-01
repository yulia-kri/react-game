export const get = (key) => {
  return localStorage.getItem(key);
};

export const set = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};
