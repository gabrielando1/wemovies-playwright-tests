import { test, expect } from "@playwright/test";
import {
  gerarTresUnicos,
  getProductData,
  getCartInfo,
  clickMinus,
  clickPlus,
  clickTrash
} from "./helpers/cartHelpers";

test("S008 - Remoção manual e esvaziamento completo", async ({ page }) => {
  await page.goto("/");

  // Seleção de três produtos aleatórios
  const [a, b, c] = gerarTresUnicos();
  const productCards = page.locator("section > div");

  const firstCard = productCards.nth(a);
  const secondCard = productCards.nth(b);
  const thirdCard = productCards.nth(c);

  // Dados dos produtos selecionados
  const firstData = await getProductData(firstCard);
  const secondData = await getProductData(secondCard);
  const thirdData = await getProductData(thirdCard);

  // Adiciona: 2 do primeiro, 3 do segundo, 4 do terceiro
  for (let i = 0; i < 2; i++) await firstCard.locator("button").click();
  for (let i = 0; i < 3; i++) await secondCard.locator("button").click();
  for (let i = 0; i < 4; i++) await thirdCard.locator("button").click();

  // Vai ao carrinho
  await page.getByRole("button", { name: /Meu Carrinho/i }).click();
  await expect(page).toHaveURL(/\/cart/);

  const cartItems = page.locator('img[alt]').locator('xpath=ancestor::div[1]');

  // Reduções de quantidade
  await clickMinus(cartItems.nth(0));
  await clickMinus(cartItems.nth(1));
  await clickMinus(cartItems.nth(2));

  // Dados após primeira redução
  const cartFirst = await getCartInfo(cartItems.nth(0));
  const cartSecond = await getCartInfo(cartItems.nth(1));
  const cartThird = await getCartInfo(cartItems.nth(2));

  expect(cartFirst.name).toBe(firstData.name);
  expect(cartFirst.price).toBe(firstData.price);
  expect(cartFirst.qtd).toBe("1");

  expect(cartSecond.name).toBe(secondData.name);
  expect(cartSecond.price).toBe(secondData.price);
  expect(cartSecond.qtd).toBe("2");

  expect(cartThird.name).toBe(thirdData.name);
  expect(cartThird.price).toBe(thirdData.price);
  expect(cartThird.qtd).toBe("3");

  // Remove o primeiro item totalmente
  await clickMinus(cartItems.nth(0));
  await clickMinus(cartItems.nth(0));

  await clickMinus(cartItems.nth(1));

  await expect(cartItems).toHaveCount(2);

  const sobra1 = await getCartInfo(cartItems.nth(0));
  const sobra2 = await getCartInfo(cartItems.nth(1));

  expect(sobra1.name).toBe(secondData.name);
  expect(sobra1.price).toBe(secondData.price);
  expect(sobra1.qtd).toBe("1");

  expect(sobra2.name).toBe(thirdData.name);
  expect(sobra2.price).toBe(thirdData.price);
  expect(sobra2.qtd).toBe("2");

  // Remove o segundo item usando o botão de lixeira
  await clickTrash(cartItems.nth(0));

  await expect(cartItems).toHaveCount(1);

  const finalItem = await getCartInfo(cartItems.nth(0));

  expect(finalItem.name).toBe(thirdData.name);
  expect(finalItem.price).toBe(thirdData.price);
  expect(finalItem.qtd).toBe("2");
});
