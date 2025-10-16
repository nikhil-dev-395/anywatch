export interface ISuggestions {
  id: string;
  title: string;
  poster: string;
}

export interface IStream {
  url: string;
  title: string;
  headers: any;
  suggestions: ISuggestions[];
}
