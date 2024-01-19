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
  {
    id: 7,
    surveyId: 1,
    optionLabel: 'developmentLevel1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee kehittyneessä maassa.*',
      sv: '*Your partner is located in a developed country.*',
      en: '*Your partner is located in a developed country.*',
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
    id: 8,
    surveyId: 1,
    optionLabel: 'developmentLevel2',
    isSelected: {
      fi: '*Yhteistyöumppanisi sijaitsee vähemmän kehittyneessä maassa, millä saattaa olla vaikutusta yhteistyön suunnitteluun ja toteutukseen.*',
      sv: '*Your partner is located in a less-developed country, which might affect planning and implementing the collaboration.*',
      en: '*Your partner is located in a less-developed country, which might affect planning and implementing the collaboration.*',
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
    id: 9,
    surveyId: 1,
    optionLabel: 'developmentLevel3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee vähiten kehittyneessä maassa. Tämä ei itsessään ole välttämättä riski, mutta ota tämä kuitenkin huomioon yhteistyön suunnittelussa ja toteutuksessa*',
      sv: '*Your partner is located in a least developed country. In and by itself, this is not a risk, but you should still take this into account in planning and implementing phases.*',
      en: '*Your partner is located in a least developed country. In and by itself, this is not a risk, but you should still take this into account in planning and implementing phases.*',
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
    id: 10,
    surveyId: 1,
    optionLabel: 'academicFreedomLevel1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on hyvällä tasolla.*',
      sv: '*Your collaboration partner is located in a country, where academic freedom is at a good level.*',
      en: '*Your collaboration partner is located in a country, where academic freedom is at a good level.*',
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
    id: 11,
    surveyId: 1,
    optionLabel: 'academicFreedomLevel2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on jonkin verran rajoitettua. Huomioi tämä yhteistyön toteutuksessa.*',
      sv: '*Your collaboration partner is located in a country, where academic freedom is somewhat restricted. Take this into account in implementation.*',
      en: '*Your collaboration partner is located in a country, where academic freedom is somewhat restricted. Take this into account in implementation.*',
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
    id: 12,
    surveyId: 1,
    optionLabel: 'academicFreedomLevel3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on hyvin rajoitettua. Harkitse yhteistyötä tarkasti tästä ja yliopiston [arvojen](https://www.helsinki.fi/fi/tutustu-meihin/strategia-talous-ja-laatu/strategia-2021-2030/arvot) näkökulmasta*',
      sv: "*Your collaboration partner is located in a country, where academic freedom very restricted. Consider your collaboration, and whether it is compatible with University's [values](https://www.helsinki.fi/en/about-us/strategy-economy-and-quality/strategic-plan-2021-2030/values)*",
      en: "*Your collaboration partner is located in a country, where academic freedom very restricted. Consider your collaboration, and whether it is compatible with University's [values](https://www.helsinki.fi/en/about-us/strategy-economy-and-quality/strategic-plan-2021-2030/values)*",
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
    id: 13,
    surveyId: 1,
    optionLabel: 'politicalStabilityLevel1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti vakaassa maassa.*',
      sv: '*Your collaboration partner is located in a politically stable country.*',
      en: '*Your collaboration partner is located in a politically stable country.*',
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
    id: 14,
    surveyId: 1,
    optionLabel: 'politicalStabilityLevel2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti melko epävakaassa maassa.*',
      sv: '*Your collaboration partner is located in a politically somewhat unstable country.*',
      en: '*Your collaboration partner is located in a politically somewhat unstable country.*',
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
    id: 15,
    surveyId: 1,
    optionLabel: 'politicalStabilityLevel3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti epävakaassa maassa.*',
      sv: '*Your collaboration partner is located in a politically unstable country.*',
      en: '*Your collaboration partner is located in a politically unstable country.*',
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
    id: 16,
    surveyId: 1,
    optionLabel: 'totalRiskLevel1',
    isSelected: {
      fi: '*Yhteistyön kokonaisriski on alhainen. Yhteistyössä voi kuitenkin esiintyä tunnistamattomia riskejä ja nyt arvioitujen asioiden riskitaso saattaa muuttua jatkossa.*',
      sv: '*Risk level is low. However, the collaboration may entail unidentified risks and the risks assessed here may change in the future.*',
      en: '*Risk level is low. However, the collaboration may entail unidentified risks and the risks assessed here may change in the future.*',
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
    id: 17,
    surveyId: 1,
    optionLabel: 'totalRiskLevel2',
    isSelected: {
      fi: '*Yhteistyön kokonaisriskitaso on kohonnut. Kiinnitä erityistä huomiota kohonneisiin riskeihin ja mieti niiden hallintaa. Toteuta tarvittaessa yksityiskohtaisempi riskiarvio.*',
      sv: '*Risk-level is elevated. Pay attention to individual risks and their management. Undertake a more detailed risk assessment, if necessary.*',
      en: '*Risk-level is elevated. Pay attention to individual risks and their management. Undertake a more detailed risk assessment, if necessary.*',
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
    id: 18,
    surveyId: 1,
    optionLabel: 'totalRiskLevel3',
    isSelected: {
      fi: '*Yhteistyön kokonaisriskitaso on merkittävä. Yksityiskohtaisemman riskiarvion toteuttaminen on suositeltavaa. Ryhdy myös toimenpiteisiin tunnistettujen riskien hallitsemiseksi.*',
      sv: '*Risk level is high. It is highly recommendable to undertake a more detailed risk assessment, and take action on individual risks indentified here.*',
      en: '*Risk level is high. It is highly recommendable to undertake a more detailed risk assessment, and take action on individual risks indentified here.*',
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
    id: 19,
    surveyId: 1,
    optionLabel: 'gdprRiskLevel1',
    isSelected: {
      fi: '*Tietosuojamielessä yhteistyöhön ei kohdistu erityisiä vaatimuksia.*',
      sv: '*GDPR is not applicable*',
      en: '*GDPR is not applicable*',
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
    id: 20,
    surveyId: 1,
    optionLabel: 'gdprRiskLevel2',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Yhteistyökumppanisi sijaintimaa kuuluu helpotetun menettelyn mukaisiin maihin, mutta tutustu tarkempiin ohjeisiin Flammassa.*',
      sv: '*Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at Flamma.*',
      en: '*Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at Flamma.*',
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
    id: 21,
    surveyId: 1,
    optionLabel: 'gdprRiskLevel3',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Tutustu tarkempiin ohjeisiin Flammassa.*',
      sv: '*Handing over personal data requires GDPR compliance. Please review instructions at Flamma.*',
      en: '*Handing over personal data requires GDPR compliance. Please review instructions at Flamma.*',
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
    id: 22,
    surveyId: 1,
    optionLabel: 'organisationRiskLevel1',
    isSelected: {
      fi: '*Yhteistyökumppani löytyy EU:n komission rahoittamiskelpoisten organisaatioiden listalta, joten sitä voidaan pitää luotettavana.*',
      sv: '',
      en: "*Partner organisation appeard on the EU Commission's list ot eligible organisations, and may be trusted.*",
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
    id: 23,
    surveyId: 1,
    optionLabel: 'organisationRiskLevel2',
    isSelected: {
      fi: '*Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, mutta sen kanssa on tehty aiempaa yhteistyötä. Jos luotat edelleen yhteistyökumppaniin, voit edetä yhteistyön suunnittelussa ja toteutuksessa.*',
      sv: '',
      en: '*Partner organisation does not appear on EU Comission list of approved organisations, but there is a history of previous collaboration. If you continue to trust the partner organisation, you can go ahead and continue planinning and implementing the collaboration.*',
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
    id: 24,
    surveyId: 1,
    optionLabel: 'organisationRiskLevel3',
    isSelected: {
      fi: '*Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, eikä sen kanssa ole tehty aiempaa yhteistyötä. Selvitä kumppanin taustat ennen yhteistyöhön sitoutmista ja sen aloittamista.*',
      sv: '',
      en: "*Partner organisation does not appear on EU Comission list of approved organisations, and there is no history of previous collaboration. Please investigate the partner's background before committing to collaboration.*",
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
    id: 25,
    surveyId: 1,
    optionLabel: 'dualUseRiskLevel1',
    isSelected: {
      fi: '*Yhteistyö ei sisällä kaksoiskäyttöriskejä.*',
      sv: '',
      en: '*Collaboration does not pose Dual Use risks.*',
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
    id: 26,
    surveyId: 1,
    optionLabel: 'dualUseRiskLevel2',
    isSelected: {
      fi: '*Olet ilmoittanut, että ei ole tiedossa onkoyhteistyössä mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Koska kaksoiskäyttö (Dual Use) on lailla kiellettyä, on sen estämisen varmistaminen yhteistyölle välttämätöntä. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '',
      en: '*According to the information provided, the possibility of military technology or related knowledge being tranferred to the partner in question in not certain. As Dual Use is illegal, and its prevention is  precondition for the collaboration, ensuring compliance is mandatory. Please review related instructions in Flamma and contact Research Services experts, if necessary..*',
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
    id: 27,
    surveyId: 1,
    optionLabel: 'dualUseRiskLevel3',
    isSelected: {
      fi: '*Olet ilmoittanut, että yhteistyössää on mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Kaksoiskäyttö (Dual Use) on lailla kiellettyä, joten sen estäminen on yhteistyölle välttämätöntä. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '',
      en: '*According to the information provided, there is a possibility of military technology or related knowledge being tranferred to the partner in question. Dual Use is illegal, and its prevention is  precondition for the collaboration. Please review related instructions in Flamma and contact Research Services experts, if necessary.*',
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
