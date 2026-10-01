import {
  IDCardData,
  FaceVerification,
} from "../types/ekyc";

export async function mockOCR(
  frontImage: string,
  backImage: string
): Promise<IDCardData> {

  await new Promise(resolve =>
    setTimeout(resolve, 1500)
  );

  return {
    fullName: "NGUYEN BAO",
    idNumber: "079204012345",
    dateOfBirth: "20/05/2004",
    address: "123 Nguyen Trai, Quan 1, TP. Ho Chi Minh",

    frontImage,
    backImage,
  };
}

export async function mockFaceVerification(
  image: string
): Promise<FaceVerification> {

  await new Promise(resolve =>
    setTimeout(resolve, 2000)
  );

  return {
    detected: true,
    livenessPassed: true,
    faceMatched: true,
  };
}

