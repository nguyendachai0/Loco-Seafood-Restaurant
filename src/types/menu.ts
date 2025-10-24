export interface MenuItem {
  id: string;
  name: {
    en: string;
    vi: string;
    kr: string;
  };
  description: {
    en: string;
    vi: string;
    kr: string;
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
    kr: string;
  };
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}