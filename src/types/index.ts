export type Language = 'hi' | 'en';

export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  shortDescHi: string;
  shortDescEn: string;
  fullDescHi: string;
  fullDescEn: string;
  significanceHi: string;
  significanceEn: string;
  durationHi: string;
  durationEn: string;
  iconName: string;
  highlightsHi: string[];
  highlightsEn: string[];
}

export interface BookingFormData {
  fullName: string;
  mobile: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  location: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'temple' | 'puja' | 'havan' | 'festivals';
  categoryLabelHi: string;
  categoryLabelEn: string;
  imageSrc: string;
  descriptionHi: string;
  descriptionEn: string;
}

export interface Shloka {
  sanskrit: string;
  meaningHi: string;
  meaningEn: string;
  source: string;
}
