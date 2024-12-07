import { ProjectMini } from "./project";

export interface User {
  _id: string;
  expiresIn: number;
  email: string;
  fullName: string;
  profile?: Profile;
  projects: ProjectMini[];
}

export interface Profile {
  availableForHire?: boolean;
  bio?: string;
  avatar?: string;
  cover?: string;
  followers?: number[];
  following?: number[];
  website?: string;
  profession?: string;
  phone?: string;
  social?: Social;
}
export interface Social {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}
