export interface ApiResponse {
  name: string;
  alpha3Code: string;
  independent: boolean;
}

export interface CountryDetailsType {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number;
  borders: string[];
  flag: string;
}