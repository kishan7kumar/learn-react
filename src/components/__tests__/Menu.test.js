import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/menuData";
import axios from "axios";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
jest.mock("axios");

test("Search results on homepage", async () => {
  axios.get.mockResolvedValueOnce({ data: MENU_DATA });
  axios.get.mockResolvedValueOnce({ data: MENU_DATA });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("menu-items")));
  const AddButton = body.getAllByTestId("add-button");
  fireEvent.click(AddButton[0]);
  const cartCount = body.getByTestId("cart-item");
  expect(cartCount.innerHTML).toBe("Cart 1");
});
