export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
}

export interface NavLink {
  label: string;
  href: string;
}
