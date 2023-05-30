import Fetch from "./Fetch";

describe("Fetch", () => {
  // verificar que get devuelve un objeto con las propiedades:
  // status, data y error

  it("get method returns an object with status, data and error properties", async () => {
    const response = await Fetch.get();
    expect(response).toHaveProperty("status");
    expect(response).toHaveProperty("data");
    expect(response).toHaveProperty("error");
  });
  // verificar que el status de la respuesta es succeeded o failed
  it("get method returns an object with status succeeded or failed", async () => {
    const response = await Fetch.get();
    expect(response.status).toMatch(/succeeded|failed/);
  });
  // verificar que la propiedad error es un string o null

  it(`get method returns an object with error property as string or null`, async () => {
    const response = await Fetch.get();
    expect(
      typeof response.error === "string" || response.error === null
    ).toBeTruthy();
  });

  // verificar que post devuelve un objeto con las propiedades:
  // id, title y done
  it(`post method returns an object with id, title and done`, async () => {
    const response = await Fetch.post({ title: "test" });
    expect(response.data).toHaveProperty("_id");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("done");
    expect(response.data.title).toEqual("test");
    expect(response.data.done).toEqual(false);
  });
  // verificar que el método update devuelve un objeto con las propiedades:
  // id, title y done
  it(`update method returns an object with id, title and done`, async () => {
    const { data } = await Fetch.get();
    const id = data[0]._id;
    const response = await Fetch.update({ title: "zxc", done: true }, id);
    expect(response.data).toHaveProperty("_id");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("done");
    expect(response.data.title).toEqual("zxc");
    expect(response.data.done).toEqual(true);
  });
  // verificar que el método update devuelve un error si no se envía el id
  it(`update method returns an error if id is not provided`, async () => {
    try {
      const response = await Fetch.update({
        title: "Updated task",
        done: false,
      });
    } catch (error) {
      expect(error.message).toEqual("HTTP error! status: 400");
    }
  });
  // verificar que el método delete devuelve un objeto con la propiedad status igual al string succeeded
  it(`delete method returns an object with status property as string succeeded`, async () => {
    const { data } = await Fetch.get();
    const id = data[0]._id;
    const response = await Fetch.delete(id);
    expect(response.status).toEqual("succeeded");
  });
    // verificar que el método delete devuelve un error si no se envía el id
    it(`delete method returns an error if id is not provided`, async () => {
        try {
            const response = await Fetch.delete();
        } catch (error) {
            expect(error.message).toEqual("HTTP error! status: 400");
        }
    });
});
