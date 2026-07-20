export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}
