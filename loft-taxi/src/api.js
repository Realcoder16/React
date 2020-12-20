export const serverLogin = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then((res) => res.json());
};

export const serverRegistration = async (email, password, name, surname) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    body: JSON.stringify({ email, password, name, surname }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};
console.log(serverRegistration);

export const saveProfile = async (data) => {
  const response = await (
    await fetch(`https://loft-taxi.glitch.me/card`, {
      body: JSON.stringify(data),
      "Content-Type": "application/json",

      method: "POST",
    })
  ).json();

  if (!response.success) throw new Error(response.error);
  return response;
};

export const routeAddress = async (to, from) => {
  return fetch(`https://loft-taxi.glitch.me/route`, {
    body: JSON.stringify({ to, from }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

export const getAddress = async (data) => {
  return fetch(`https://loft-taxi.glitch.me/addressList`, {
    body: JSON.stringify({ data }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};
