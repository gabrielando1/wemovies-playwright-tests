import { Locator } from "@playwright/test";

export function gerarTresUnicos() {
  const indices = [0, 1, 2, 3, 4, 5];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 3);
}

export async function getProductData(card: Locator) {
  const name = await card.locator("h3").innerText();
  const raw = await card.locator("p").innerText();
  const price = raw.replace("R$ ", "").trim();
  return { name, price };
}

export async function getCartBasicInfo(item: Locator) {
  const name = await item.locator('p[variant="title"]').innerText();
  const price = await item.locator('p[variant="subHead"]').first().innerText();
  const qtd = await item.locator('input[type="number"]').inputValue();
  return { name, price, qtd };
}
