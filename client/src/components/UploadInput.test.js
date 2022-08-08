import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { AppContextProvider } from "../contexts/appContext";
import UploadInput from "./UploadInput";
import "@testing-library/jest-dom";

test("App renders correctly", () => {
  render(<App />);
  screen.debug();
});

test("button should be disabled", () => {
  render(
    <AppContextProvider>
      <UploadInput />
    </AppContextProvider>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("file uplaod input should be rendered", () => {
  render(
    <AppContextProvider>
      <UploadInput />
    </AppContextProvider>
  );
  const uploadInput = screen.getByTestId("uploadInput");
  expect(uploadInput).toBeInTheDocument();
  expect(uploadInput).toHaveAttribute("type", "file");
});
