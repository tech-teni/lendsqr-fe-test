interface Education {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}

interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

interface Profile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

interface Social {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface User {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: Education;
  email: string;
  guarantor: Guarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  socials: Social;
  userName: string;
}
