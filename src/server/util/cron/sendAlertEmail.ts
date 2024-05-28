import sendEmail from '../../mailer/pate'

const sendAlertEmail = async (
  email: string,
  projectName: string,
  language: string
) => {
  const subject = `${
    language === 'fi'
      ? 'Riskiarviosi on muuttunut'
      : 'Your risk assessment has changed'
  }`
  const text = `${
    language === 'fi'
      ? `Hei!\nProjektisi ${projectName} riskit on laskettu uudelleen ja projektin kokonaisriskitaso on noussut tasolle 3. Käy tarkistamassa riskiarvion uusin versio sovelluksessa`
      : `Hello!\nRisks of your project ${projectName} have been recalculated, and the total risk level of the project has increased to the level 3. Please go check the newest version of the risk assessment in the app`
  }`
  await sendEmail([email], text, subject)
}

export default sendAlertEmail
