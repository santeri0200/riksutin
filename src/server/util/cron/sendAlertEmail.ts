import sendEmail from '../../mailer/pate'

const sendAlertEmail = async (email: string, projectName: string) => {
  const subject = ''
  const text = ''
  await sendEmail([email], text, subject)
}

export default sendAlertEmail
