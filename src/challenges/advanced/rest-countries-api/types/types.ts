export interface Flags {
  svg: string;
  png: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1?: string; // Optional because some data points might miss the short code
  iso639_2: string;
  name: string;
  nativeName?: string;
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms?: string[];
  otherNames?: string[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string; // Some countries (like US Minor Outlying Islands) have no capital
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders?: string[]; // Optional because island nations have no borders
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies?: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs?: RegionalBloc[];
  cioc?: string;
  independent: boolean;
}