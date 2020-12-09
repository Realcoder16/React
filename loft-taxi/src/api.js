export const serverLogin = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
}



export const serverRegistration = async (email, password, name, surname) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    body: JSON.stringify({ email, password, name, surname }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
}

