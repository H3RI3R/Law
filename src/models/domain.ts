/**
 * Domain Models for Aprajita Legal Website
 */

export interface IStat {
  id: string;
  value: string;
  label: string;
  highlighted?: boolean;
}

export class StatModel implements IStat {
  constructor(
    public readonly id: string,
    public readonly value: string,
    public readonly label: string,
    public readonly highlighted: boolean = false
  ) {}

  public getFormattedValue(): string {
    return this.value;
  }
}

export interface IAward {
  id: string;
  stars: number;
  title: string;
  year?: string;
}

export class AwardModel implements IAward {
  constructor(
    public readonly id: string,
    public readonly stars: number,
    public readonly title: string,
    public readonly year?: string
  ) {}
}

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

export class AdvocateModel implements IAdvocate {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly designation: string,
    public readonly qualifications: string,
    public readonly bio: string,
    public readonly specializations: string[],
    public readonly experience?: string,
    public readonly notableClients?: string[],
    public readonly isFoundingPartner: boolean = false
  ) {}
}

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

export class PracticeAreaModel implements IPracticeArea {
  constructor(
    public readonly id: string,
    public readonly slug: string,
    public readonly title: string,
    public readonly subtitle: string,
    public readonly shortDescription: string,
    public readonly detailedProfile: {
      intro: string;
      services: {
        category: string;
        items: string[];
      }[];
    }
  ) {}
}

export interface INavItem {
  label: string;
  href: string;
  active?: boolean;
}

export class NavItemModel implements INavItem {
  constructor(
    public readonly label: string,
    public readonly href: string,
    public readonly active: boolean = false
  ) {}
}
