import { Result } from '../types'

const getResultData = (): Result[] => [
  {
    id: 1,
    surveyId: 1,
    optionLabel: 'corruptionLevel1',
    isSelected: {
      fi: 'Yhteistyökumppanin sijaintimaassa korruptio ei ole merkittävä riski.',
      sv: 'Your collaboration partner is located in a country, where corruption does not pose a serious risk.',
      en: 'Your collaboration partner is located in a country, where corruption does not pose a serious risk".',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 2,
    surveyId: 1,
    optionLabel: 'corruptionLevel2',
    isSelected: {
      fi: '*Yhteistyökumppanin sijaintimaassa korruption riski on kohonnut. Ota tämä huomioon yhteistyön suunnittelussa ja toteutuksessa.*',
      sv: '*Your collaboration partner is located in a country, where the risk of corruption is elevated. Take this into account in planning and implementing your collaboration.*',
      en: '*Your collaboration partner is located in a country, where the risk of corruption is elevated. Take this into account in planning and implementing your collaboration.*',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 3,
    surveyId: 1,
    optionLabel: 'corruptionLevel3',
    isSelected: {
      fi: '*Yhteistyökumppanin sijaintimaassa korruption riski on merkittävä. Ota tämä huomioon yhteistyön suunnittelussa ja toteutuksessa ja varmistu, ettet osallistu korruptioon.*',
      sv: '*Your collaboration partner is located in a country, where the risk of corruption is significant. Take this into account in planning and implementing your collaboration, and make sure you do not engage in corruption.*',
      en: '*Your collaboration partner is located in a country, where the risk of corruption is significant. Take this into account in planning and implementing your collaboration, and make sure you do not engage in corruption.*',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 4,
    surveyId: 1,
    optionLabel: 'safetyLevel1',
    isSelected: {
      fi: '*Yhteistyömaahan matkustamiseen ei liity rajoituksia. Varmistu halutessasi tarkemmin tilanteesta ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o)*',
      sv: '*Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
      en: '*Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 5,
    surveyId: 1,
    optionLabel: 'safetyLevel2',
    isSelected: {
      fi: '*Yhteistyömaahan matkustamiseen liittyy rajoituksia, jotka on syytä ottaa huomioon. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o)".*',
      sv: '*Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
      en: '*Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 6,
    surveyId: 1,
    optionLabel: 'safetyLevel3',
    isSelected: {
      fi: '*Yhteistyömaahan matkustaminen ei ole tällä hetkellä mahdollista. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o).*',
      sv: '*Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
      en: '*Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only.*',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
]

export default getResultData
