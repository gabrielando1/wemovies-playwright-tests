import { test, expect } from "@playwright/test";
import {
  gerarTresUnicos,
  getProductData,
  getCartBasicInfo
} from "./helpers/cartAddHelpers";

test("S003 - Adicionar itens e validar exibição", async ({ page }) => {
  await page.goto("/");

  // Seleciona 3 produtos aleatórios
  const [a, b, c] = gerarTresUnicos();

  const productCards = page.locator("section > div");

  const firstCard = productCards.nth(a);
  const secondCard = productCards.nth(b);
  const thirdCard = productCards.nth(c);

  // Dados dos produtos
  const firstData = await getProductData(firstCard);
  const secondData = await getProductData(secondCard);
  const thirdData = await getProductData(thirdCard);

  // Adiciona 1, 2 e 3 unidades
  await firstCard.locator("button").click();

  for (let i = 0; i < 2; i++) await secondCard.locator("button").click();
  for (let i = 0; i < 3; i++) await thirdCard.locator("button").click();

  // Valida cor dos botões
  await expect(firstCard.locator("button")).toHaveAttribute("color", "success");
  await expect(secondCard.locator("button")).toHaveAttribute("color", "success");
  await expect(thirdCard.locator("button")).toHaveAttribute("color", "success");

  // Valida quantidade exibida no botão
  await expect(firstCard.locator("button")).toContainText(/^1/);
  await expect(secondCard.locator("button")).toContainText(/^2/);
  await expect(thirdCard.locator("button")).toContainText(/^3/);

  // Vai ao carrinho
  await page.getByRole("button", { name: /Meu Carrinho/i }).click();
  await expect(page).toHaveURL(/\/cart/);

  const cartItems = page.locator('img[alt]').locator("xpath=ancestor::div[1]");
  await expect(cartItems).toHaveCount(3);

  // Infos do carrinho
  const cartFirst = await getCartBasicInfo(cartItems.nth(0));
  const cartSecond = await getCartBasicInfo(cartItems.nth(1));
  const cartThird = await getCartBasicInfo(cartItems.nth(2));

  // Produto 1
  expect(cartFirst.name).toBe(firstData.name);
  expect(cartFirst.price).toBe(firstData.price);
  expect(cartFirst.qtd).toBe("1");

  // Produto 2
  expect(cartSecond.name).toBe(secondData.name);
  expect(cartSecond.price).toBe(secondData.price);
  expect(cartSecond.qtd).toBe("2");

  // Produto 3
  expect(cartThird.name).toBe(thirdData.name);
  expect(cartThird.price).toBe(thirdData.price);
  expect(cartThird.qtd).toBe("3");
});
