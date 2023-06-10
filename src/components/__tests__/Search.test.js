import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RES_Data } from "../../mocks/data";
import axios from "axios";
import "@testing-library/jest-dom";
jest.mock("axios");

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: Promise.resolve(resData),
//   });
// });

test("Search results on homepage", async () => {
  axios.get.mockResolvedValueOnce({ data: RES_Data });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("input-box")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for string(oho)on homepage", async () => {
  axios.get.mockResolvedValueOnce({ data: RES_Data });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("input-box")));
  const searchInput = body.getByTestId("input-box");
  fireEvent.change(searchInput, {
    target: {
      value: "Oho",
    },
  });
  const searchButton = body.getByTestId("search-button");
  fireEvent.click(searchButton);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});
