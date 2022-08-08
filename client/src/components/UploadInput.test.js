import { render, screen } from "@testing-library/react";
import App from "../App";
import { AppContextProvider } from "../contexts/appContext";
import UploadInput from "./UploadInput";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("App renders correctly", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
});

test("button should be disabled", () => {
  render(
    <BrowserRouter>
      <AppContextProvider>
        <UploadInput />
      </AppContextProvider>
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("file uplaod input should be rendered", () => {
  render(
    <BrowserRouter>
      <AppContextProvider>
        <UploadInput />
      </AppContextProvider>
    </BrowserRouter>
  );
  const uploadInput = screen.getByTestId("uploadInput");
  expect(uploadInput).toBeInTheDocument();
  expect(uploadInput).toHaveAttribute("type", "file");
});
