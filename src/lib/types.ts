export type NavItem = {
  label: string;
  href: string;
};

export type HeroBadge = {
  label: string;
};

export type ProblemItem = {
  question: string;
  answer: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  cta: string;
  href?: string;
  comingSoon?: boolean;
};

export type StatItem = {
  value: number;
  suffix?: string;
  labelJa: string;
  labelEn: string;
};

export type ReasonItem = {
  id: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  year: string;
  course: string;
  comment: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TableColumn<T> = {
  key: keyof T;
  header: string;
};

export type AdmissionRow = {
  year: string;
  capacity: number;
  applicants: number;
  accepted: number;
  ratio: string;
};

export type CourseDetail = {
  id: string;
  title: string;
  format: string;
  duration: string;
  price: string;
  points: string[];
};

export type PricingRow = {
  title: string;
  price: string;
  notes: string;
};

export type Benefit = {
  text: string;
};

export type TimelineItem = {
  month: string;
  event: string;
};

export type KobetsuCourse = {
  title: string;
  price: string;
  target: string;
  description: string;
};

export type MonthlyCycleItem = {
  week: string;
  detail: string;
};
