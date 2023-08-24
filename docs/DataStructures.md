# Survey

The `Survey` model represents a high level abstraction of a single survey withing the application. This allows the application to have multiple different surveys that each contains different set of `questions`, `recommendations` and `results`.

## Properties

- `id` (number): The unique identifier for the survey.
- `name` (number): The name used to identify the survey and fetch it's data from the backend services. Use &#128042;&#128188; (camelCase) as you probably should anyways.
- `title` (Locales): The localized titles of the survey in different languages.
- `text` (Locales): The localized text content of the survey in different languages.

# Question

The `Question` model represents a question within a survey. It stores various attributes related to the question, including its content, options, and visibility settings.

## Properties

- `id` (number): The unique identifier for the question.
- `surveyId` (number): The ID of the survey to which this question belongs.
- `parentId` (number): The ID of the parent question, if applicable. This is used for hierarchical questions. NOTE: parentId must be 'null' if you want the question to locate on the root, else provide the question.id of the parent.
- `priority` (number): The priority or order of the question within the survey 0 being the most prioritized question and then the priority number should just increase by 1 when going down the hierarchy. NOTE: IF a question IS a child question then the priority numbers start from 0 again inside the parents child hierarchy.
- `title` (Locales): The localized titles of the question in different languages.
- `text` (Locales): The localized text content of the question in different languages.
- `optionData` (OptionData): The data structure that holds information about the question's options type and the option data related.
- `visibility` (Visibility | undefined): Optional visibility settings for the question. Visibility options are only able to refer to a different questions option id. It is not to be used to refer the questions own option id's.

## Usage

### Defining info question

```json
  {
    "id": 1,
    "surveyId": 1,
    "parentId": null,
    "priority": 0,
    "title": {
      "fi": "Yleinen kysymys",
      "sv": "Generell fråga",
      "en": "General Question",
    },
    "text": {
      "fi": "Tämä on yleinen kysymys.",
      "sv": "Det här är en generell fråga.",
      "en": "This is a general question.",
    },
    "optionData": {
        "type": "info",
        "options": []
      },
    "visibility": {
    },
  },
```

### Defining single choice question

```json
{
  "id": 2,
  "surveyId": 1,
  "parentId": null,
  "priority": 1,
  "title": {
    "fi": "Kysymys valinnasta",
    "sv": "Fråga om val",
    "en": "Choice Question"
  },
  "text": {
    "fi": "Valitse suosikkisi.",
    "sv": "Välj din favorit.",
    "en": "Choose your favorite."
  },
  "optionData": {
    "type": "singleChoice",
    "options": [
      {
        "id": "option1",
        "label": "option1",
        "title": {
          "fi": "Vaihtoehto 1",
          "sv": "Alternativ 1",
          "en": "Option 1"
        }
      },
      {
        "id": "option2",
        "label": "option2",
        "title": {
          "fi": "Vaihtoehto 2",
          "sv": "Alternativ 2",
          "en": "Option 2"
        }
      }
    ]
  },
  "visibility": {}
}
```

### Defining multiple choice question

```json
  {
    "id": 3,
    "surveyId": 1,
    "parentId": null,
    "priority": 2,
    "title": {
      "fi": "Monivalintakysymys",
      "sv": "Fråga med flera val",
      "en": "Multiple Choice Question",
    },
    "text": {
      "fi": "Valitse useita vaihtoehtoja.",
      "sv": "Välj flera alternativ.",
      "en": "Choose multiple options.",
    },
    "optionData": {
      "type": "multipleChoice",
      "options": [
        {
          "id": "option3",
          "label": "option3",
          "title": {
            "fi": "Vaihtoehto 3",
            "sv": "Alternativ 3",
            "en": "Option 3",
          },
        },
        {
          "id": "option4",
          "label": "option4",
          "title": {
            "fi": "Vaihtoehto 4",
            "sv": "Alternativ 4",
            "en": "Option 4",
          },
        },
      ],
    },
    "visibility": {},
  },
```

### Defining child questions

```json
[
  {
    "id": 4,
    "surveyId": 1,
    "parentId": 3,
    "priority": 0,
    "title": {
      "fi": "Lapsikysymys",
      "sv": "Barnfråga",
      "en": "Child Question"
    },
    "text": {
      "fi": "Tämä on lapsikysymys.",
      "sv": "Det här är en barnfråga.",
      "en": "This is a child question."
    },
    "optionData": {
      "type": "singleChoice",
      "options": [
        {
          "id": "childOption1",
          "label": "childOption1",
          "title": {
            "fi": "Vaihtoehto A",
            "sv": "Alternativ A",
            "en": "Option A"
          }
        },
        {
          "id": "childOption2",
          "label": "childOption2",
          "title": {
            "fi": "Vaihtoehto B",
            "sv": "Alternativ B",
            "en": "Option B"
          }
        }
      ]
    },
    "visibility": { "options": ["option3"] }
  },
  {
    "id": 5,
    "surveyId": 1,
    "parentId": 4,
    "priority": 0,
    "title": {
      "fi": "Sisennetty Lapsikysymys",
      "sv": "Inkurerad Barnfråga",
      "en": "Indented Child Question"
    },
    "text": {
      "fi": "Tämä on lapsikysymyksen lapsikysymys.",
      "sv": "Det här är en barnfråga",
      "en": "This is a child question"
    },
    "optionData": {
      "type": "multipleChoice",
      "options": [
        {
          "id": "childOption3",
          "label": "childOption3",
          "title": {
            "fi": "Vaihtoehto 1",
            "sv": "Alternativ 1",
            "en": "Option 1"
          }
        },
        {
          "id": "childOption4",
          "label": "childOption4",
          "title": {
            "fi": "Vaihtoehto 2",
            "sv": "Alternativ 2",
            "en": "Option 2"
          }
        }
      ]
    },
    "visibility": {}
  }
]
```

### Example of a larger set of questions

```json
[
  {
    "id": 1,
    "surveyId": 1,
    "parentId": null,
    "priority": 0,
    "title": {
      "fi": "Yleinen kysymys",
      "sv": "Generell fråga",
      "en": "General Question"
    },
    "text": {
      "fi": "Tämä on yleinen kysymys.",
      "sv": "Det här är en generell fråga.",
      "en": "This is a general question."
    },
    "optionData": {
      "type": "info",
      "options": []
    },
    "visibility": {}
  },
  {
    "id": 2,
    "surveyId": 1,
    "parentId": null,
    "priority": 1,
    "title": {
      "fi": "Kysymys valinnasta",
      "sv": "Fråga om val",
      "en": "Choice Question"
    },
    "text": {
      "fi": "Valitse suosikkisi.",
      "sv": "Välj din favorit.",
      "en": "Choose your favorite."
    },
    "optionData": {
      "type": "singleChoice",
      "options": [
        {
          "id": "option1",
          "label": "option1",
          "title": {
            "fi": "Vaihtoehto 1",
            "sv": "Alternativ 1",
            "en": "Option 1"
          }
        },
        {
          "id": "option2",
          "label": "option2",
          "title": {
            "fi": "Vaihtoehto 2",
            "sv": "Alternativ 2",
            "en": "Option 2"
          }
        }
      ]
    },
    "visibility": {}
  },
  {
    "id": 3,
    "surveyId": 1,
    "parentId": null,
    "priority": 2,
    "title": {
      "fi": "Monivalintakysymys",
      "sv": "Fråga med flera val",
      "en": "Multiple Choice Question"
    },
    "text": {
      "fi": "Valitse useita vaihtoehtoja.",
      "sv": "Välj flera alternativ.",
      "en": "Choose multiple options."
    },
    "optionData": {
      "type": "multipleChoice",
      "options": [
        {
          "id": "option3",
          "label": "option3",
          "title": {
            "fi": "Vaihtoehto 3",
            "sv": "Alternativ 3",
            "en": "Option 3"
          }
        },
        {
          "id": "option4",
          "label": "option4",
          "title": {
            "fi": "Vaihtoehto 4",
            "sv": "Alternativ 4",
            "en": "Option 4"
          }
        }
      ]
    },
    "visibility": {}
  },
  {
    "id": 4,
    "surveyId": 1,
    "parentId": 3,
    "priority": 0,
    "title": {
      "fi": "Lapsikysymys",
      "sv": "Barnfråga",
      "en": "Child Question"
    },
    "text": {
      "fi": "Tämä on lapsikysymys.",
      "sv": "Det här är en barnfråga.",
      "en": "This is a child question."
    },
    "optionData": {
      "type": "singleChoice",
      "options": [
        {
          "id": "childOption1",
          "label": "childOption1",
          "title": {
            "fi": "Vaihtoehto A",
            "sv": "Alternativ A",
            "en": "Option A"
          }
        },
        {
          "id": "childOption2",
          "label": "childOption2",
          "title": {
            "fi": "Vaihtoehto B",
            "sv": "Alternativ B",
            "en": "Option B"
          }
        }
      ]
    },
    "visibility": { "options": ["option3"] }
  },
  {
    "id": 5,
    "surveyId": 1,
    "parentId": 4,
    "priority": 0,
    "title": {
      "fi": "SisennettyLapsikysymys",
      "sv": "Inkurerad Barnfråga",
      "en": "Indented Child Question"
    },
    "text": {
      "fi": "Tämä on lapsikysymyksen lapsikysymys.",
      "sv": "Det här är en barnfråga",
      "en": "This is a child question"
    },
    "optionData": {
      "type": "multipleChoice",
      "options": [
        {
          "id": "childOption3",
          "label": "childOption3",
          "title": {
            "fi": "Vaihtoehto 1",
            "sv": "Alternativ 1",
            "en": "Option 1"
          }
        },
        {
          "id": "childOption4",
          "label": "childOption4",
          "title": {
            "fi": "Vaihtoehto 2",
            "sv": "Alternativ 2",
            "en": "Option 2"
          }
        }
      ]
    },
    "visibility": {}
  }
]
```

# Result

The `Result` model is used to map FormValues (the selections of a given survey) into a data structure of corresponding results.

## Properties

- `id` (number): The unique identifier for the result.
- `surveyId` (number): The ID of the survey associated with this result.
- `optionLabel` (string): The label representing the selected option.
- `isSelected` (Locales): The localized label indicating whether the option is selected. This will always be rendered if question.option.id is optionLabel. This is pretty much a Title for the results usually indicating or reminder that the option was selected.
- `data` (object): The data structure containing result information. data.resultData contains all the more niche results for linked to a certain recommendation label. For full reference of the possible recommendationLabels check project specification, recommendationLabel type from the types.ts file or discuss with the client. You may also provide other data fields such as type or other survey specific stuff without the need for model migrations.

## Usage

### Defining result data

```json
{
  "id": 1,
  "surveyId": 1,
  "optionLabel": "option1", // This is supposed to link the result to a questions option.id that the result should be linked to check reference option1 from the Question examples.
  "isSelected": {
    // This is supposed to indicate the 'Title' or the 'main' text of the result in the result page, this is visible on all times if the option was selected.
    "fi": "Olet valinnut Lapsi kysymykseen vastaukseksi: 'Valittu'.",
    "sv": "Du har valt 'Vald' som svaret för Barnfrågan.",
    "en": "You have selected 'Selected' as the answer for the Child Question."
  },
  "data": {
    "resultData": {
      "allDimensions": {
        // This will render a sub result below the isSelected with a black left border.
        "fi": "Tähän kohtaan voidaan kirjoittaa aina näkyvää tekstiä.",
        "sv": "I detta avsnitt kan du skriva text som alltid är synlig.",
        "en": "At this point, you can write text that is always visible."
      }
      // ... Other recommendation labels available to this survey.
    }
  }
}
```

# Recommendation

The `Recommendation` model represents the recommended tools or what ever that will be shown on the side of the survey.

Recommendations are really up to customization on a certain project.

## Properties

- `id` (number): The unique identifier for the recommendation.
- `surveyId` (number): The ID of the survey to which this recommendation belongs.
- `label` (string): The label identifying the recommendation (e.g., 'disclosure', 'clinic').
- `type` (string): The type of the recommendation eg. a category or something like that.
- `title` (Locales): The localized title of the recommendation.
- `text` (Locales): The localized description or text of the recommendation.

## Usage

### Defining recommendations

```json
[
  {
    "id": 1,
    "surveyId": 1,
    "label": "recommendation1",
    "type": "common",
    "title": {
      "fi": "[Suositus 1 esimerkki](https://commonmark.org/help/)",
      "sv": "[Rekommendation 1 exempel](https://commonmark.org/help/)",
      "en": "[Recommendation 1 example](https://commonmark.org/help/)"
    },
    "text": {
      "fi": "Voit käyttää Markdownia suositusten otsikko ja tekstikentissä.",
      "sv": "Du kan använda Markdown i rekommendationens titel- och textfält.",
      "en": "You can use Markdown in the recommendation title and text fields."
    }
  },
  {
    "id": 2,
    "surveyId": 1,
    "label": "recommendation2",
    "type": "common",
    "title": {
      "fi": "Suositus 2 esimerkki ilman Markdown-sisältöä",
      "sv": "Rekommendation 2 exempel utan Markdown-innehåll",
      "en": "Recommendation 2 example without markdown content"
    },
    "text": {
      "fi": "Sinun ei välttämättä tarvitse toimittaa tekstiä tekstikenttään.",
      "sv": "Du behöver inte nödvändigtvis ange någon text i textfältet.",
      "en": "You don't necessarily have to provide any text in the text field."
    }
  },
  {
    "id": 3,
    "surveyId": 1,
    "label": "recommendation3",
    "type": "common",
    "title": {
      "fi": "Suositus 3 esimerkki",
      "sv": "Rekommendation 3 exempel",
      "en": "Recommendation 3 example"
    },
    "text": {
      "fi": "Suosituksen \"type\"-kenttää voidaan tarvittaessa lisätä erilaisia vaihtoehtoja, joiden mukaan suosituksia voidaan hyödyntää eri tarkoituksiin.",
      "sv": "Fältet \"type\" för rekommendationen kan utökas med olika alternativ vid behov, vilket möjliggör användning av rekommendationer för olika ändamål.",
      "en": "The \"type\" field of the recommendation can be expanded with various options as needed, allowing recommendations to be utilized for different purposes."
    }
  },
  {
    "id": 4,
    "surveyId": 1,
    "label": "recommendation4",
    "type": "common",
    "title": {
      "fi": "Suositus 4",
      "sv": "Rekommendation 4",
      "en": "Recommendation 4"
    },
    "text": {
      "fi": "\"Label\"-kenttä on tarkoitettu suosituksien tunnistamiseen ja valitsemiseen admin-näkymässä. Se voi hyvin olla ihmisluettavassa muodossa.",
      "sv": "Fältet \"Label\" är avsett för att identifiera och välja rekommendationer i admin-vyn. Det kan vara i en läsbar format för människor.",
      "en": "The \"Label\" field is intended for identifying and selecting recommendations in the admin view. It can be in a human-readable format."
    }
  }
]
```

# Entry

The `Entry` model represents the data submitted for a survey. It captures the values provided by users in response to survey questions.

## Properties

- `id` (number): The unique identifier for the entry.
- `surveyId` (number): The ID of the survey to which this entry belongs.
- `userId` (string): The ID of the user who submitted the entry (optional).
- `data` (object): The data submitted for the survey. This is typically an object containing responses to various survey questions.
- `sessionToken` (string | null): A session token associated with the entry, if applicable.
