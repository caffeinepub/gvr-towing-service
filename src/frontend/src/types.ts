export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TrustBadge {
  value: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  location: string;
  city: string;
  district: string;
  hours: string;
}

export interface NavLink {
  label: string;
  href: string;
}
