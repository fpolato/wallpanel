export interface MeteoForecast {
  daily: {
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    time: string[],
    weathercode: number[]
  },
  daily_units: {
    temperature_2m_max: string,
    temperature_2m_min: string,
    time: string,
    weathercode: string
  },
  elevation: number,
  generationtime_ms: number,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation: string,
  utc_offset_seconds: number
}
