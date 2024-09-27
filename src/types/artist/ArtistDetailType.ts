export interface ArtistDetailType {
  name: string;
  About: string;
  ArtworkModule: string;
  accountId: string;
  ArtistName: string;
  Surnameone: string;
  Highlights: string;
  cvs: CVs[];
  Surnametwo?: string;
  ArtworkNickname?: string;
  ArtistId: string;
  country?: object | null;
  createDate?: string;
  Language: string[];
  zipCode: string;
  city: string;
  Province: string;
  address: string;
  phoneNumber: string;
  email: string;
  gender: string;
  InternalNote?: string;
  ProductStatus: string;
  year: string;
  ArtistCategory: ArtistCategory[];
  Type: string;
  TaxNumber: string;
  TaxLegalName: string;
  TaxAddress: string;
  TaxZipCode: string;
  TaxCity: string;
  TaxProvince: string;
  TaxCountry?: object | null;
  TaxEmail: string;
  TaxPhone: string;
  BankIBAN: string;
  BankName: string;
  CustomOrder: string;
  PublishingCatalog: string;
  ArtistFees: string;
  ArtistPlus?: string;
  MinNumberOfArtwork: string;
  MaxNumberOfArtwork: string;
  Description: string;
  Location?: string;
  Scope?: string;
  LogName: string;
  LogisticAddress: string;
  LogZipCode: string;
  LogCity: string;
  LogProvince: string;
  LogCountry?: object | null;
  ManagerArtistName: string;
  ManagerSurnameone: string;
  ManagerSurnametwo?: string;
  ManagerArtworkNickname?: string;
  ContactTo?: string;
  ManagerphoneNumber: string;
  ManagerEmail: string;
  ManagerAddress: string;
  ManagerZipCode: string;
  ManagerCity: string;
  ManagerProvince: string;
  ManagerCountry: string;
  ManagerLanguage: string[];
  ManagerGender: string;
  LogEmail: string;
  LogphoneNumber: string;
  LogAdditionalNotes?: string;
}

interface CVs {
  year: string;
  Type: string;
  Description: string;
  Location?: string;
  Scope?: string;
}

interface ArtistCategory {
  catagoryone: string;
  styleone: string;
  styletwo: string;
}
