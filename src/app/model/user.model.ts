export interface User {
  joinDate: Date;
  name: string;
  address: string;
  phone: string;
  email: string;
  dob: Date;
  gender: 'male' | 'female';
  fellowship: string;
  guestBy: string;
  remark: string[];
  membership: string;
  bsc_no: string;
  cell: string;
  image: string;
  isEmailConfirmed: boolean;
  isPhoneConfirmed: boolean;
  role: string;
}
