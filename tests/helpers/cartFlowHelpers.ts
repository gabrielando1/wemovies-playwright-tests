import { Locator, Page } from "@playwright/test";

export function gerarEscolhaDeterminada() {
  const indices = [0, 1, 2, 3, 4, 5];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 3);
}

export function gerarEscolhaRandom() {
  const indices = Array.from({ length: 9 }, (_, i) => i + 1);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 3);
}

export async function getProductData(card: Locator) {
  const name = await card.locator("h3").innerText();
  const raw = await card.locator("p").innerText();
  const price = raw
    .replace(/[R$\s]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();
  return { name, price };
}

function parseMoney(valor: string): number {
  return Number(
    valor
      .replace(/[R$\s]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
}

export async function getCartInfo(item: Locator, page: Page) {
  const name = await item.locator('p[variant="title"]').innerText();
  const price = await item.locator('p[variant="subHead"]').first().innerText();
  const rawTotal = await page.locator('p[variant="topHead"]').innerText();
  const rawSubtotal = await item.locator("p.subtotal-column").innerText();

  const subtotal = Number(parseMoney(rawSubtotal).toFixed(2));
  const total = Number(parseMoney(rawTotal).toFixed(2));

  return { name, price, subtotal, total };
}
