const BASE_URL = process.env.BASE_URL;

export const getAllUsers = async () => {
  try {
    if (!BASE_URL) {
      throw new Error("BASE_URL is not defined");
    }

    const response = await fetch(`${BASE_URL}users`);

    if (!response.ok) {
      console.error(`Error: ${response.statusText}`);
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const users = await response.json();

    return users;
  } catch (error) {
    return error;
  }
};
