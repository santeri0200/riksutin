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
    fi: '### Insert pöhinä texts here',
    sv: '### Insert pöhinä texts here',
    en: '### Insert pöhinä texts here',
  },
})

export default getSurveyData
