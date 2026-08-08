/**
 * Domain Models for Aprajita Legal Website
 */

export interface IStat {
  id: string;
  value: string;
  label: string;
  highlighted?: boolean;
}

export type StatModel = IStat;

export interface IAward {
  id: string;
  stars: number;
  title: string;
  year?: string;
}

export type AwardModel = IAward;

export interface IAdvocate {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  bio: string;
  experience?: string;
  specializations: string[];
  notableClients?: string[];
  isFoundingPartner?: boolean;
}

export type AdvocateModel = IAdvocate;

export interface IPracticeArea {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  detailedProfile: {
    intro: string;
    services: {
      category: string;
      items: string[];
    }[];
  };
}

export type PracticeAreaModel = IPracticeArea;

export interface INavItem {
  label: string;
  href: string;
  active?: boolean;
}

export type NavItemModel = INavItem;
