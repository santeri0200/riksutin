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

test('shows the risk table and answers after submitting', async ({ page }) => {
  const nameInput = page.getByTestId('question-1').getByRole('textbox')
  const countrySelect = page.getByLabel('Valitse sijaintimaa')

  await nameInput.click()
  await nameInput.fill('Testi Testinen')

  await countrySelect.click()
  await page.getByRole('option', { name: 'Afghanistan' }).click()
  await page.getByRole('button', { name: 'Valinnat tehty' }).click()

  await expect(page.getByText('Yhteistyön riskit')).toBeVisible()

  await expect(page.getByText('Vastauksesi')).toBeVisible()
  await expect(page.getByText('Ilmoittajan nimi: Testi Testinen')).toBeVisible()
})

test('selecting a country shows a list of universities', async ({ page }) => {
  await page.getByLabel('Valitse sijaintimaa').click()
  await page.getByRole('option', { name: 'Afghanistan' }).click()
  await page.getByText('Yliopisto', { exact: true }).click()
  await page.getByLabel('Valitse yliopisto').click()
  await expect(
    page.getByRole('option', { name: 'Kardan University' })
  ).toBeVisible()
})

test('organisation select works', async ({ page }) => {
  await page.getByLabel('Muu tutkimuslaitos').check()

  const organisationSelectInput = page
    .getByTestId('question-22')
    .getByRole('textbox')

  await organisationSelectInput.click()
  await organisationSelectInput.fill('helsingin yliopisto')
  await page.getByLabel('Organisaatio').click()
  await expect(
    page.getByRole('option', { name: 'HELSINGIN YLIOPISTO', exact: true })
  ).toBeVisible()
})

test('shows correct risk levels', async ({ page }) => {
  await page.getByLabel('Valitse sijaintimaa').click()
  await page.getByRole('option', { name: 'Afghanistan' }).click()
  await page.getByLabel('Yliopisto').check()
  await page.getByLabel('Valitse yliopisto').click()
  await page.getByRole('option', { name: 'Kardan University' }).click()
  await page.getByLabel('Kyllä').first().check()
  await page.getByLabel('Yhteistyön koordinaattori').check()
  await page.getByLabel('Kyllä').nth(1).check()
  await page.getByLabel('Tutkimusyhteistyö').check()
  await page.getByLabel('Koulutus/opetusyhteistyö').check()
  await page.getByLabel('-24kk').check()
  await page.getByLabel('Ei', { exact: true }).nth(2).check()
  await page.getByLabel('Yli 200000').check()
  await page.getByLabel('Ei', { exact: true }).nth(3).check()
  await page.getByLabel('Kyllä').nth(4).check()
  await page.getByRole('button', { name: 'Valinnat tehty' }).click()
  await expect(
    page.getByText(
      'Yhteistyön kokonaisriskitaso on merkittävä. Yksityiskohtaisemman riskiarvion toteuttaminen on suositeltavaa. Ryhdy myös toimenpiteisiin tunnistettujen riskien hallitsemiseksi.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyökumppanin sijaintimaassa korruption riski on merkittävä. Ota tämä huomioon yhteistyön suunnittelussa ja toteutuksessa ja varmistu, ettet osallistu korruptioon.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyökumppanisi sijaitsee poliittisesti epävakaassa maassa.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyöumppanisi sijaitsee vähemmän kehittyneessä maassa, millä saattaa olla vaikutusta yhteistyön suunnitteluun ja toteutukseen.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyömaahan matkustaminen ei ole tällä hetkellä mahdollista. Tutki tarkemmat yksityiskohdat ulkoministeriön matkustustiedotteista.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Lue lisää maahan kohdistuvista pakotteista sanctionsmap.eu-sivulta'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on hyvin rajoitettua. Harkitse yhteistyötä tarkasti tästä ja yliopiston arvojen näkökulmasta'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Tietosuojamielessä yhteistyöhön ei kohdistu erityisiä vaatimuksia.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Yhteistyöyliopisto on listattu World Higher Education -tietokannassa ja kuuluu lisäksi johonkin seuraavista: Euroopan tai maailman ylipistojen liitto (EUA/IAU), Magna Charta Observatory, Scholars at Risk.'
    )
  ).toBeVisible()
  await expect(
    page.getByText(
      'Olet ilmoittanut, että yhteistyössää on mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Kaksoiskäyttö (Dual Use) on lailla kiellettyä, joten sen estäminen on yhteistyölle välttämätöntä. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.'
    )
  ).toBeVisible()
  await expect(
    page
      .getByRole('row', { name: 'Yhteistyön taloudellinen riskitaso' })
      .locator('div')
      .nth(1)
  ).toHaveText('3')
})
