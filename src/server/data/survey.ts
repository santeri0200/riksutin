import { DEFAULT_SURVEY_NAME } from '../../config'

const getSurveyData = () => ({
  id: 1,
  name: DEFAULT_SURVEY_NAME,
  title: {
    fi: '## Tervetuloa Riksuttimeen',
    sv: '## Välkommen till Riksutin',
    en: '## Welcome to Riksutin',
  },
  text: {
    fi: '### Tervetuloa käyttämään Helsingin yliopiston kansainvälisen yhteistyön riskiarviointisovellusta. Täyttämällä arvioitavan yhteistyön perustiedot, saat arvion sekä yhteistyön kokonais- että keskeisten kv-yhteistyön yksittäisistä riskitasoista. Lisäksi saat ohjeita ja lisätietoja tunnistettujen riskien hallitsemiseksi.',
    sv: '### Welcome to the University of Helsinki international collaboration risk assessment application. By providing some key data regarding the collaboration, you will receive an assessment of the risk level overall, as well as for individual risks. Additionally, you will receive instructions and additional information to manage and mitigate these risks.',
    en: '### Welcome to the University of Helsinki international collaboration risk assessment application. By providing some key data regarding the collaboration, you will receive an assessment of the risk level overall, as well as for individual risks. Additionally, you will receive instructions and additional information to manage and mitigate these risks.',
  },
})

export default getSurveyData
