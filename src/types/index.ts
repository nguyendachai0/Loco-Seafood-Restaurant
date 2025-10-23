export * from './menu';

export interface LocalizedString {
  en: string;
  vi: string;
}

export interface PageProps {
  params: {
    locale: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}