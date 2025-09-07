interface Weather {
  icon: string;
  description: string;
}

interface Main {
  temp: string;
  feels_like: string;
}

interface Wind {
  speed: string;
}

export interface WeatherReport {
  name?: string | null;
  weather?: Weather[] | null;
  main?: Main | null;
  wind?: Wind | null;
}

export interface WeatherReportState {
  weatherReport: WeatherReport | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string | null;
}
