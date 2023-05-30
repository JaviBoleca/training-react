import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Validar la interfaz de usuario

beforeAll(() => {
  render(<App />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Task title");
  const button = screen.getByRole("button");
  userEvent.click(button);
});

describe("App", () => {
  // verificar que el componente App renderiza
  it("renders App component", () => {
    render(<App />);
  });

  // verificar que el texto Post a task se muestra en la interfaz
  it("renders Post a task text", () => {
    render(<App />);
    const text = screen.getByText(/Post a task/i);
    expect(text).toBeInTheDocument();
  });

  // verificar que hay un input en la interfaz
  it("renders an input", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  // verificar que hay un botón en la interfaz con el texto Save
  it("renders a button with text Save", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Save/i);
  });
  // comprobar que hay elementos de lista en la interfaz
  it("renders list items", async () => {
    render(<App />);
    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();
  });
  // comprobar que el primer elemento de lista tiene un div con el
  // atributo contenteditable=true y que dentro hay un div con un string
  it(`App contains a list of tasks with a contenteditable div`, async () => {
    render(<App />);
    const list = await screen.findByRole("list");
    const div = list.firstChild.firstChild;
    expect(div).toHaveAttribute("contenteditable", "true");
    expect(div).toHaveTextContent(/.+/i);
  });
  // comprobar que hay un elemento span con la clase done,
  // otro con la clase edit y otro con la clase delete
  it(`App contains a list of tasks with done, edit and delete buttons`, async () => {
    render(<App />);
    const list = await screen.findByRole("list");
    expect(list.firstChild.firstChild.nextSibling).toHaveClass("done", {
      exact: false,
    });
    expect(list.firstChild.firstChild.nextSibling.nextSibling).toHaveClass(
      "edit",
      {
        exact: false,
      }
    );
    expect(
      list.firstChild.firstChild.nextSibling.nextSibling.nextSibling
    ).toHaveClass("delete", {
      exact: false,
    });
  });
  /*
  Hacer click en el botón editar del primer elemento de lista.
  Cambiar el texto del div por "Task title updated".
  Pulsar la tecla enter para guardar los cambios.
  Verificar que el texto  del div editable es "Task title updated".
  Verificar que el div ya no tienen la clase edit-mode.
  */
  it(`Change, save and verify the new text into the first task`, async () => {
    render(<App />);
    let list = await screen.findByRole("list");
    const editButton = list.firstChild.firstChild.nextSibling.nextSibling;
    userEvent.click(editButton);
    userEvent.keyboard("{del}");
    userEvent.type(list.firstChild.firstChild, "La nueva tarea");
    userEvent.keyboard("{enter}");
    list = await screen.findByRole("list");
    expect(list.firstChild.firstChild).toHaveTextContent("La nueva tarea");
    expect(list.firstChild.firstChild).not.toHaveClass("edit-mode", {
      exact: false,
    });
  });
});
