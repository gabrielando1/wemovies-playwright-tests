import { test, expect } from "@playwright/test";
import {
  gerarEscolhaDeterminada,
  gerarEscolhaRandom,
  getProductData,
  getCartInfo
} from "./helpers/cartFlowHelpers";

test("S009 - Finalizar fluxo de compra", async ({ page }) => {
  await page.goto("/");

  // Seleciona 3 produtos aleatórios
  const [a, b, c] = gerarEscolhaDeterminada();

  // Seleciona 3 quantidades aleatórias (1 a 9)
  const [d, e, f] = gerarEscolhaRandom();

  const productCards = page.locator("section > div");

  const firstCard = productCards.nth(a);
  const secondCard = productCards.nth(b);
  const thirdCard = productCards.nth(c);

  // Dados dos produtos
  const firstData = await getProductData(firstCard);
  const secondData = await getProductData(secondCard);
  const thirdData = await getProductData(thirdCard);

  console.log("Produto escolhido 1:", firstData);
  console.log("Produto escolhido 2:", secondData);
  console.log("Produto escolhido 3:", thirdData);

  // Adiciona os produtos conforme d, e e f
  for (let i = 0; i < d; i++) await firstCard.locator("button").click();
  for (let i = 0; i < e; i++) await secondCard.locator("button").click();
  for (let i = 0; i < f; i++) await thirdCard.locator("button").click();

  // Vai ao carrinho
  await page.getByRole("button", { name: /Meu Carrinho/i }).click();
  await expect(page).toHaveURL(/\/cart/);

  const cartItems = page.locator('img[alt]').locator("xpath=ancestor::div[1]");

  // Infos do carrinho
  const cartFirst = await getCartInfo(cartItems.nth(0), page);
  const cartSecond = await getCartInfo(cartItems.nth(1), page);
  const cartThird = await getCartInfo(cartItems.nth(2), page);

  // Subtotais esperados
  const subtotal1 = Number((Number(firstData.price) * d).toFixed(2));
  const subtotal2 = Number((Number(secondData.price) * e).toFixed(2));
  const subtotal3 = Number((Number(thirdData.price) * f).toFixed(2));

  // Valida produto 1
  expect(cartFirst.name).toBe(firstData.name);
  expect(cartFirst.subtotal).toBe(subtotal1);

  // Valida produto 2
  expect(cartSecond.name).toBe(secondData.name);
  expect(cartSecond.subtotal).toBe(subtotal2);

  // Valida produto 3
  expect(cartThird.name).toBe(thirdData.name);
  expect(cartThird.subtotal).toBe(subtotal3);

  console.log("Subtotal 1:", "qtd", d, "* R$", firstData.price, "= R$", subtotal1);
  console.log("Subtotal 2:", "qtd", e, "* R$", secondData.price, "= R$", subtotal2);
  console.log("Subtotal 3:", "qtd", f, "* R$", thirdData.price, "= R$", subtotal3);

  // Total esperado
  const finalTotal = Number((subtotal1 + subtotal2 + subtotal3).toFixed(2));

  console.log("Total calculado:", finalTotal);

  // Compara com o total exibido
  expect(finalTotal).toBe(cartFirst.total);

  // Finaliza o pedido
  await page.getByRole("button", { name: /finalizar pedido/i }).click();
  await expect(page).toHaveURL(/purchase-made/);

  // Tela de confirmação
  await expect(page.locator("h3")).toContainText(/Compra realizada com sucesso!/i);
  await expect(page.locator("main svg")).toBeVisible();

  // Testa botão de voltar
  await page.getByRole("button", { name: /voltar/i }).click();
  await expect(page).toHaveURL("/");

   console.log("Fluxo de compra realizado com sucesso!");
});
