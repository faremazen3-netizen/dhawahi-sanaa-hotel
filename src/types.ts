export interface Room {
  id: string;
  name: string;
  category: 'suite' | 'family' | 'double' | 'single';
  categoryLabel: string;
  tag: string;
  tagColor?: string;
  pricePerNight: number;
  currency: string;
  size: string;
  capacity: string;
  bedType: string;
  view: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: {
    icon: string;
    label: string;
  }[];
}

export interface AmenityService {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'suites' | 'rooms' | 'lobby';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  comment: string;
  stayType: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  customerName?: string;
  customerPhone?: string;
  specialRequests?: string;
}
