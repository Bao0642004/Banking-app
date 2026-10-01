export interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
}

export interface IDCardData {
  fullName: string;
  idNumber: string;
  dateOfBirth: string;
  address: string;
  frontImage?: string;
  backImage?: string;
}

export interface FaceVerification {
  detected: boolean;
  livenessPassed: boolean;
  faceMatched: boolean;
}