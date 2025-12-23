import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ProgramItem {
  title: string;
  desc: string;
  image: string;
  colSpan: string;
}

export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  status: string;
  date: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  school: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}