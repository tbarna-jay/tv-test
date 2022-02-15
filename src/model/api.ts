export type ApiResponse<P> = { content?: P; errorCode?: number };

export interface Schedule {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: Date | string;
  runtime: number;
  image?: null;
  summary?: null | string;
  show: Show;
  _links?: ScheduleLinks;
}

export interface ScheduleLinks {
  self?: Self;
}

export interface Self {
  href?: string;
}

export interface Character {
  id?: number;
  url?: string;
  name?: string;
  image?: Image;
  _links?: ShowLinks;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday?: string;
  deathday?: string;
  gender: string;
  image: Image;
  updated: number;
  _links: ShowLinks;
}

export interface Actor {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Show {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  premiered?: Date | string;
  officialSite?: null | string;
  schedule?: ScheduleClass;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: Network | null;
  externals?: Externals;
  image: Image;
  summary?: string;
  updated?: number;
  _links?: ShowLinks;
  _embedded?: {
    cast?: Actor[];
  };
}

export interface Externals {
  tvrage?: number | null;
  thetvdb?: number | null;
  imdb?: null | string;
}

export interface Image {
  medium?: string;
  original?: string;
}

export interface ShowLinks {
  self?: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

export interface Network {
  id?: number;
  name?: string;
  country?: Country | null;
}

export interface Country {
  name?: string;
  code?: string;
  timezone?: string;
}

export interface Rating {
  average?: number | null;
}

export interface ScheduleClass {
  time?: string;
  days?: string[];
}
