
export enum IndustryType {
  ShoppingCenter = 'Shopping Center',
  QSR = 'QSR',
  Restaurant = 'Restaurant',
  OfficeCondo = 'Office Condo',
  MedicalCondo = 'Medical Condo'
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: IndustryType;
  location: string;
  year: string | number;
  overview: string;
  what_we_did: string[];
  outcomes: string[];
  timeline?: string;
  tags: string[];
  image?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
