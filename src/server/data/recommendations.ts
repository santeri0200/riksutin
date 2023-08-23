import { Recommendation } from '../types'

const getRecommendationsData = (): Recommendation[] => [
  {
    id: 1,
    surveyId: 1,
    label: 'recommendation1',
    type: 'common',
    title: {
      fi: '[Suositus 1 esimerkki](https://commonmark.org/help/)',
      sv: '[Rekommendation 1 exempel](https://commonmark.org/help/)',
      en: '[Recommendation 1 example](https://commonmark.org/help/)',
    },
    text: {
      fi: 'Voit käyttää Markdownia suositusten otsikko ja tekstikentissä.',
      sv: 'Du kan använda Markdown i rekommendationens titel- och textfält.',
      en: 'You can use Markdown in the recommendation title and text fields.',
    },
  },
  {
    id: 2,
    surveyId: 1,
    label: 'recommendation2',
    type: 'common',
    title: {
      fi: 'Suositus 2 esimerkki ilman Markdown-sisältöä',
      sv: 'Rekommendation 2 exempel utan Markdown-innehåll',
      en: 'Recommendation 2 example without markdown content',
    },
    text: {
      fi: 'Sinun ei välttämättä tarvitse toimittaa tekstiä tekstikenttään.',
      sv: 'Du behöver inte nödvändigtvis ange någon text i textfältet.',
      en: 'You dont necessarily have to provide any text in the text field.',
    },
  },
  {
    id: 3,
    surveyId: 1,
    label: 'recommendation3',
    type: 'common',
    title: {
      fi: 'Suositus 3 esimerkki',
      sv: 'Rekommendation 3 exempel',
      en: 'Recommendation 3 example',
    },
    text: {
      fi: 'Suosituksen "type"-kenttää voidaan tarvittaessa lisätä erilaisia vaihtoehtoja, joiden mukaan suosituksia voidaan hyödyntää eri tarkoituksiin.',
      sv: 'Fältet "type" för rekommendationen kan utökas med olika alternativ vid behov, vilket möjliggör användning av rekommendationer för olika ändamål.',
      en: 'The "type" field of the recommendation can be expanded with various options as needed, allowing recommendations to be utilized for different purposes.',
    },
  },
  {
    id: 4,
    surveyId: 1,
    label: 'recommendation4',
    type: 'common',
    title: {
      fi: 'Suositus 4',
      sv: 'Rekommendation 4',
      en: 'Recommendation 4',
    },
    text: {
      fi: '"Label"-kenttä on tarkoitettu suosituksien tunnistamiseen ja valitsemiseen admin-näkymässä. Se voi hyvin olla ihmisluettavassa muodossa.',
      sv: 'Fältet "Label" är avsett för att identifiera och välja rekommendationer i admin-vyn. Det kan vara i en läsbar format för människor.',
      en: 'The "Label" field is intended for identifying and selecting recommendations in the admin view. It can be in a human-readable format.',
    },
  },
]

export default getRecommendationsData
