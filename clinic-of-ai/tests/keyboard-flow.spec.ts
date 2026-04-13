import { expect, Locator, Page, test } from '@playwright/test'

async function tabUntilFocused(page: Page, target: Locator, maxTabs = 80): Promise<void> {
  for (let i = 0; i < maxTabs; i += 1) {
    await page.keyboard.press('Tab')
    const focused = await target.evaluate((el) => el === document.activeElement)
    if (focused) {
      return
    }
  }

  throw new Error(`Could not focus target after ${maxTabs} Tab presses`)
}

test.describe('Keyboard-only flow checks', () => {
  test('mobile navbar supports open, trap, and escape close flow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /open menu/i })
    await expect(menuButton).toBeVisible()

    await tabUntilFocused(page, menuButton)
    await page.keyboard.press('Enter')

    const menuDialog = page.getByRole('dialog', { name: /mobile navigation menu/i })
    await expect(menuDialog).toBeVisible()

    const firstMenuLink = page.getByRole('link', { name: 'Solutios' })
    await expect(firstMenuLink).toBeFocused()

    await page.keyboard.press('Escape')
    await expect(menuDialog).toBeHidden()
    await expect(menuButton).toBeFocused()
  })

  test('contact form is keyboard navigable', async ({ page }) => {
    await page.goto('/contact')

    const dayButton = page.getByRole('button', { name: 'April 15, 2026' })
    await dayButton.focus()
    await page.keyboard.press('Enter')
    await expect(dayButton).toHaveAttribute('aria-pressed', 'true')

    const timeButton = page.getByRole('button', { name: 'Select 11:30' })
    await timeButton.focus()
    await page.keyboard.press('Enter')
    await expect(timeButton).toHaveAttribute('aria-pressed', 'true')

    const nameInput = page.locator('#contact-name')
    const emailInput = page.locator('#contact-email')
    const companyInput = page.locator('#contact-company')
    const focusSelect = page.locator('#contact-focus')

    await nameInput.focus()
    await page.keyboard.type('Keyboard User')
    await page.keyboard.press('Tab')
    await expect(emailInput).toBeFocused()

    await page.keyboard.type('keyboard.user@example.com')
    await page.keyboard.press('Tab')
    await expect(companyInput).toBeFocused()

    await page.keyboard.type('Clinic QA')
    await page.keyboard.press('Tab')
    await expect(focusSelect).toBeFocused()

    const submitButton = page.getByRole('button', { name: /book a conversation/i })
    await expect(submitButton).toBeVisible()
  })

  test('academy accordion works with keyboard', async ({ page }) => {
    await page.goto('/academy')

    const firstFaqButton = page.getByRole('button', { name: 'Who is this cohort for?' })
    await firstFaqButton.focus()
    await expect(firstFaqButton).toBeFocused()

    await page.keyboard.press('Enter')
    await expect(firstFaqButton).toHaveAttribute('aria-expanded', 'true')

    const panelId = await firstFaqButton.getAttribute('aria-controls')
    expect(panelId).toBeTruthy()
    await expect(page.locator(`#${panelId}`)).toBeVisible()

    await page.keyboard.press('Enter')
    await expect(firstFaqButton).toHaveAttribute('aria-expanded', 'false')
  })
})

