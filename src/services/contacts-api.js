const BASE_URL = 'http://localhost:4040/contacts';

async function fetchContacts() {
  try {
    const result = await fetch(`${BASE_URL}/contacts`);
    const data = result.json();
    return data;
  } catch (err) {
    throw err;
  }
}

async function addContacts(newContactToAdd) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newContactToAdd),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const result = await fetch(`${BASE_URL}`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const api = {
  fetchContacts,
  addContacts,
};

export default api;
