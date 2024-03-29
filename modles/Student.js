import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  SubmitedUsername: String,
  SubmitedDepartment: String,
  ApplicationID: Number,
  sdate: Date,
  Category: String,
  ReservedCategory: String,
  Domicile: String,
  District: String,
  NameofCandidate: String,
  Address: String,
  Tel: Number,
  MobileNo: Number,
  FNameofCandidate: String,
  MNameofCandidate: String,
  Religion: String,
  Caste: String,
  ANameofCandidate: String,
  RegistrationNo: Number,
  MeritNo: Number,
  Year: String,
  AcademicYear: Date,
  Gender: String,
  sdateBirth: Date,
  sdateBirthPlace: String,
  LastSchool: String,
  School: String,
  SSCMM: Number,
  SSCSM: Number,
  SSCEM: Number,
  HSCMM: Number,
  HSCSM: Number,
  HSCEM: Number,
  NameofStudent: String,
  ParentsIncome: Number,
  MeritMarkSSC: Number,
  StudentCategory: String,
  WhetherEBC: String,
  HandicapType: String,
  DefenceType: String,
  HSCScienceHSCVocationalPassed: String,
  HSCMCVCPassedITIPassed: String,
  MarksobtainedinScience: Number,
  AdmissionDate: Date,
  TotalFee: Number,
  StayinginHostel: String,
  Branch: String,
  EducationFacility: String,
  NCC: String,
  TypeofCandidiate: String,
  MinorityCandidiate: String,
  Emailid: String,
  Address2: String,
  LandLineNo: Number,
  MoNo: Number,
  FullNameofParent: String,
  FatherMotherGuardianof: String,
  classBranch: String,
  SODOMrMiss: String,
  Declaredthis: Date,
  Deponent: String,
  Verifiedat: Date,
  Ldate: Date,
  Lfrom: String,
  Lsname: String,
  Lsno: Number,
  Lpname: String,
  Lpno: Number,
  Lspgname: String,
  Lspgclass: String,
  Lspgbranch: String,
  Lspgcategory: String,

  Lpnamemarathi: String,
  Payfee: Number,
  LBranch: String,
  LYear: String,
  Typeadmission: String,

  AllotmentLetter: String,
  MarksheetorZFORM: String,
  SSCMARKSHEET: String,
  HSCMARKSHEET: String,
  LEAVINGCERTIFICATE: String,
  CASTCERTIFICATE: String,
  NONCREMYLAYERCERTIFICATE: String,
  GAPCERTIFICATE: String,
  NATIONALITYCERTIFICATE: String,
  DEFENCECERTIFICATE: String,
  PHYSICALHANDICAPCERTIFICATE: String,
  NCCCERTIFICATE: String,
  DRAWINGCERTIFICATE: String,
  INCOMECERTIFICATE: String,
  IFANYDOCUMENTSREQUIRED: String,
  Lssname: String,
  Lssno: Number,
  Lspno: Number,
  Lsdate: Date,
});
const UserModel = mongoose.model("newstd", UserSchema);

export default UserModel;
