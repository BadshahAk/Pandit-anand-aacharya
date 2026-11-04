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
  whatsapp?: string;
  sameAsMobile?: boolean;
  serviceId: string;
  preferredDate: string;
  preferredTime?: string;
  address?: string;
  location: string;
  message: string;
  utrNumber?: string;
  advanceAmount?: string;
  screenshotBase64?: string;
}

export interface BankDetails {
  accountNumber: string;
  holderName: string;
  bankName: string;
  branch: string;
  ifsc: string;
  accountType: string;
  upiId?: string;
}

export interface GalleryItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: string;
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
  source?: string;
}
