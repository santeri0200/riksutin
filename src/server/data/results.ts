import { Result } from '../types'

const getResultData = (): Result[] => [
  {
    id: 1,
    surveyId: 1,
    optionLabel: 'corruption1',
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
    optionLabel: 'corruption2',
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
    optionLabel: 'corruption3',
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
      fi: '*Yhteistyömaahan matkustamiseen ei liity rajoituksia. Varmistu halutessasi tarkemmin tilanteesta ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
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
      fi: '*Yhteistyömaahan matkustamiseen liittyy rajoituksia, jotka on syytä ottaa huomioon. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
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
      fi: '*Yhteistyömaahan matkustaminen ei ole tällä hetkellä mahdollista. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
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
    optionLabel: 'HCI1',
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
    optionLabel: 'HCI2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee vähemmän kehittyneessä maassa, millä saattaa olla vaikutusta yhteistyön suunnitteluun ja toteutukseen.*',
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
    optionLabel: 'HCI3',
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
    optionLabel: 'academicFreedom1',
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
    optionLabel: 'academicFreedom2',
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
    optionLabel: 'academicFreedom3',
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
    optionLabel: 'politicalStability1',
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
    optionLabel: 'politicalStability2',
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
    optionLabel: 'politicalStability3',
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
    optionLabel: 'total1',
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
    optionLabel: 'total2',
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
    optionLabel: 'total3',
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
    optionLabel: 'GDPR1',
    isSelected: {
      fi: '*Antamisesi tietojen perusteella yhteistyöhön ei kohdistu tietousuojamielessä erityisiä vaatimuksia mutta varmistu, että henkilötietoja ei yhteistyössä tarvitse luovuttaa.*',
      sv: '',
      en: '*Based on the information you have provided, GDPR is not applicable, but please double check, if this really is the case.*',
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
    optionLabel: 'GDPR2',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Yhteistyökumppanisi sijaintimaa kuuluu helpotetun menettelyn mukaisiin maihin, mutta tutustu tarkempiin ohjeisiin [Flammassa.](https://flamma.helsinki.fi/fi/group/turvallisuus/tietosuoja#menu10)',
      sv: '*Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
      en: '*Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
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
    optionLabel: 'GDPR3',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Tutustu tarkempiin ohjeisiin [Flammassa.](https://flamma.helsinki.fi/fi/group/turvallisuus/tietosuoja#menu10)*',
      sv: '*Handing over personal data requires GDPR compliance. Please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
      en: '*Handing over personal data requires GDPR compliance. Please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
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
    optionLabel: 'organisation1',
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
    optionLabel: 'organisation2',
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
    optionLabel: 'organisation3',
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
    optionLabel: 'dualUse1',
    isSelected: {
      fi: '*Antamiesi tietojen perusteella yhteistyö ei sisällä kaksoiskäyttöriskejä. Jos tästä kuitenkin on jotain epävarmuutta, tutustu yliopiston ohjeisiin.*',
      sv: '',
      en: '*Based on your response, this collaboration does not pose Dual Use risks. If there is any doubt, please review the instructions at Flamma.*',
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
    optionLabel: 'dualUse2',
    isSelected: {
      fi: '*Olet ilmoittanut, että ei ole tiedossa onko yhteistyössä mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '',
      en: '*According to the information provided, the possibility of military technology or related knowledge being tranferred to the partner in question in not certain. It is our interest, and legal requirement to ensure that our expertise or technology does not end up in military use in sanctioned countries. Please review related instructions in Flamma and contact Research Services experts, if necessary..*',
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
    optionLabel: 'dualUse3',
    isSelected: {
      fi: '*Olet ilmoittanut, että yhteistyössä on mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '',
      en: '*According to the information provided, there is a possibility of military technology or related knowledge being tranferred to the partner in question. It is our interest, and legal requirement to ensure that our expertise or technology does not end up in military use in sanctioned countries. Please review related instructions in Flamma and contact Research Services experts, if necessary.*',
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
    id: 28,
    surveyId: 1,
    optionLabel: 'university1',
    isSelected: {
      fi: '*Yhteistyöyliopisto on listattu World Higher Education -tietokannassa ja kuuluu lisäksi johonkin seuraavista: Euroopan tai maailman ylipistojen liitto (EUA/IAU), Magna Charta Observatory, Scholars at Risk.*',
      sv: '',
      en: '*Collaboration university is listed in the World Higher Education database and is a member of European University Association, International University Association, Magna Charta Observatory or Scholars at Risk network.*',
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
    id: 29,
    surveyId: 1,
    optionLabel: 'university2',
    isSelected: {
      fi: '*Yhteistyöyliopisto on listattu World Higher Education -tietokannassa mutta ei ole Euroopan tai maailman yliopistojen liiton, Magna Charta Observatoryn tai Scholars at Risk -verkoston jäsen.*',
      sv: '',
      en: '*Collaboration university is listed in the World Higher Education database but is not a member of European University Association, International University Association, Magna Charta Observatory or Scholars at Risk network.*',
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
    id: 30,
    surveyId: 1,
    optionLabel: 'university3',
    isSelected: {
      fi: '*Yhteistyöyliopistoa ei löydy World Higher Education -tietokannasta. Varmista, että kyseessä on maansa virallisesti hyväksyttyihin kuuluva yliopisto.*',
      sv: '',
      en: '*Collaboration university is not part of the World Higher Education database. Please take steps to make sure, the partner is a legitimate university.*',
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
    id: 31,
    surveyId: 1,
    optionLabel: 'ethical1',
    isSelected: {
      fi: '*Ilmoituksesi perusteella yhteistyössä ei ole erityisiä eettisiä haasteita.*',
      sv: '',
      en: '*Based on the information you have provided, there are no specific ethical challenges in the collaboration.*',
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
    id: 32,
    surveyId: 1,
    optionLabel: 'ethical2',
    isSelected: {
      fi: '*Et ole varma yhteistyön eettisistä riskeistä. Voit halutessasi konsultoida yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto).*',
      sv: '',
      en: 'You are not sure if the collaboration includes ethical risks.',
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
    id: 33,
    surveyId: 1,
    optionLabel: 'ethical3',
    isSelected: {
      fi: '*Olet arvioinut yhteistyön eettiset riskit merkittäviksi. Suositus on, että konsultoit yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto) ennen yhteistyöhön sitoutuista.*',
      sv: '',
      en: 'You have assessed the ethical risks of the collaboration as significant.',
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
    id: 34,
    surveyId: 1,
    optionLabel: 'sanctions2',
    isSelected: {
      fi: '*Lue lisää maahan kohdistuvista pakotteista [sanctionsmap.eu](https://sanctionsmap.eu/#/main)-sivulta*',
      sv: '',
      en: '*Read more information about the sanctions at [sanctionsmap.eu](https://sanctionsmap.eu/#/main)*',
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
    id: 35,
    surveyId: 1,
    optionLabel: 'economic3',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus on huomattava, ja siihen liittyvä riskitaso on merkittävä*',
      sv: '',
      en: '*The financial scope the collaboration is siginificant and poses a substantial risk*',
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
    id: 36,
    surveyId: 1,
    optionLabel: 'economic2',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus on kohtalainen ja siihen liittyvä riskitaso on kohonnut*',
      sv: '',
      en: '*The financial scope of the collaboration is moderate, and the related risk level is elevated*',
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
    id: 37,
    surveyId: 1,
    optionLabel: 'economic1',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus ei ole merkittävä, eikä muodosta merkittävää riskiä*',
      sv: '',
      en: '*The financial scope of the collaboration is not significant, and does not pose a substantial risk*',
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
