//Response es un objeto predefinido proporcionado por JavaScript. 
//para realizar solicitudes HTTP y obtener respuestas.
//new Error() es una construcción en JavaScript que crea una nueva instancia de la clase Error. La clase Error es una 
//clase predefinida en JavaScript que se utiliza para crear objetos de error.
export default class Fetch {
  static async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  static async update(url, body) {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }
}
