const baseUrl = 'http://localhost:5000';

export const get = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  const data = await response.json();

  return data;
};
