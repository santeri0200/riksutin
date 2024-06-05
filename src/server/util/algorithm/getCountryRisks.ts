import { CountryData, FormValues, UpdatedCountryData } from '../../types'
import { gdprRisk } from './individualRisks'

const getCountryRisks = (countryData: CountryData, formData: FormValues) => {
  const sanctionsRiskLevel = countryData.sanctions ? 3 : 1
  const gdprRiskLevel = gdprRisk(countryData, formData)
  const sanctionsMultiplier =
    sanctionsRiskLevel === 3 && formData['11'].research ? 1.5 : 1

  const safetyLevelMultiplier =
    (countryData.safetyLevel === 2 || countryData.safetyLevel === 3) &&
    (formData['11'].studentMobility || formData['11'].staffMobility)
      ? 1.5
      : 1

  const updatedCountryData: UpdatedCountryData = {
    ...countryData,
    sanctions: sanctionsRiskLevel * sanctionsMultiplier,
    safetyLevel: safetyLevelMultiplier * countryData.safetyLevel,
    gdpr: gdprRiskLevel,
  }

  return updatedCountryData
}

export default getCountryRisks
