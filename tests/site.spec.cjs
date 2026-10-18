const { test, expect } = require('@playwright/test');

for (const width of [390, 768, 1440]) {
  test(`navigation, resources and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto('http://127.0.0.1:8000/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveText('Intelligencemeets strategy.');
    await expect(page.locator('main section')).toHaveCount(6);
    await expect(page.locator('img[src="./isakilogotyp.jpg"]')).toHaveCount(3);
    expect(await page.locator('.hero-logo').evaluate(img => img.complete && img.naturalWidth === 1254 && Math.abs(img.clientWidth - img.clientHeight) <= 1)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (width < 761) {
      await page.getByRole('button', { name: 'Menu' }).click();
      await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
    }
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL(/#services$/);
    if (width < 761) {
      await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
      await page.getByRole('button', { name: 'Menu' }).click();
      await page.keyboard.press('Escape');
      await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
    }
    for (const link of await page.locator('a[href^="#"]').all()) {
      const href = await link.getAttribute('href');
      await expect(page.locator(href)).toHaveCount(1);
    }
    await page.getByRole('button', { name: 'Prywatność', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await page.evaluate(() => { document.activeElement.blur(); document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); });
    await page.screenshot({ path: `/tmp/isaki-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test('keyboard skip link and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:8000/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Przejdź do treści' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});
