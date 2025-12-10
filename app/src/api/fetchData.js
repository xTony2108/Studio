const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const data = await response.json();

      throw new Error(data.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
