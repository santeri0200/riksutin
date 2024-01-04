import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Riksutin/)
})

test('has the first question', async ({ page }) => {
  await expect(page.getByText('Ilmoittajan nimi')).toBeVisible()

  const nameInput = page.getByTestId('question-1').getByRole('textbox')

  await nameInput.click()
  await nameInput.fill('')

  await expect(nameInput).toHaveValue('')
})

test('shows answers after submitting', async ({ page }) => {
  const nameInput = page.getByTestId('question-1').getByRole('textbox')

  await nameInput.click()
  await nameInput.fill('Testi Testinen')

  await page.getByRole('button', { name: 'Valinnat tehty' }).click()

  await expect(page.getByText('Yhteenveto valinnoistasi')).toBeVisible()
  await expect(page.getByText('Ilmoittajan nimi: Testi Testinen')).toBeVisible()
})
