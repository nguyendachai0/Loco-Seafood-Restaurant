export interface MenuItem {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  price: number;
  currency: string;
  category: string;
  image?: string;
  isSpecialty?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}