const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
  appProvince: joi.string().trim(true).required(),
  appDistrict:joi.string().trim(true).required(),
  appLocation:joi.string().trim(true).required(),
  firstName:joi.string().trim(true).required(),
  middleName:joi.string().trim(true).required(),
  lastName:joi.string().trim(true).required(),
  mobileNumber:joi.string().trim(true).required(),
  gender:joi.string().trim(true).required(),
  birthDistrict:joi.string().trim(true).required(),
  dobAd:joi.date().required(),
  dobBs:joi.date().required(),
  fatherFirstName:joi.string().trim(true).required(),
  fatherMiddleName:joi.string().trim(true).required(),
  fatherLastName:joi.string().trim(true).required(),
  motherFirstName:joi.string().trim(true).required(),
  motherMiddleName:joi.string().trim(true).required(),
  motherLastName:joi.string().trim(true).required(),
  citizenshipNumber:joi.string().required(),
  issueDistrict:joi.string().trim(true).required(),
  dateOfIssue:joi.date().required(),
  province:joi.string().trim(true).required(),
  district:joi.string().trim(true).required(),
  muncipality:joi.string().trim(true).required(),
  wardNo:joi.string().trim(true).required(),
  village:joi.string().trim(true).required(),
  emergeencyFirstName:joi.string().trim(true).required(),
  emergeencyMiddleName:joi.string().trim(true).required(),
  emergeencyLastName:joi.string().trim(true).required(),
  emergencyProvince:joi.string().trim(true).required(),
  emergencyDistrict:joi.string().trim(true).required(),
  emergencyMuncipality:joi.string().trim(true).required(),
  emergeencyWardNo:joi.string().trim(true).required(),
  emergeencyVillage:joi.string().trim(true).required(),
  citizenshipFront:joi.string().trim(true).required(),
  citizenshipBack:joi.string().trim(true).required(),
  marraigeCertificate:joi.string().trim(true).required(),
  passportType:joi.string().trim(true).required(),
  from:joi.string().trim(true).required(),
  //userId:joi.string().trim(true).required(),
});

const customerValidation = async (req, res, next) => {
  const payload = {
    appProvince: req.body.appProvince,
    appDistrict:req.body.appDistrict,
    appLocation:req.body.appLocation,
    firstName:req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    mobileNumber:req.body.mobileNumber,
    gender:req.body.gender,
    birthDistrict:req.body.birthDistrict,
    dobAd:req.body.dobAd,
    dobBs:req.body.dobBs,
    fatherFirstName:req.body.fatherFirstName,
    fatherMiddleName:req.body.fatherMiddleName,
    fatherLastName:req.body.fatherLastName,
    motherFirstName:req.body.motherFirstName,
    motherMiddleName:req.body.motherMiddleName,
    motherLastName:req.body.motherLastName,
    citizenshipNumber:req.body.citizenshipNumber,
    issueDistrict:req.body.issueDistrict,
    dateOfIssue:req.body.dateOfIssue,
    province:req.body.province,
    district:req.body.district,
    muncipality:req.body.muncipality,
    wardNo:req.body.wardNo,
    village:req.body.village,
    emergeencyFirstName:req.body.emergeencyFirstName,
    emergeencyMiddleName:req.body.emergeencyMiddleName,
    emergeencyLastName:req.body.emergeencyLastName,
    emergencyProvince:req.body.emergencyProvince,
    emergencyDistrict:req.body.emergencyDistrict,
    emergencyMuncipality:req.body.emergencyMuncipality,
    emergeencyWardNo:req.body.emergeencyWardNo,
    emergeencyVillage:req.body.emergeencyVillage,
    citizenshipFront:req.body.citizenshipFront,
    citizenshipBack:req.body.citizenshipBack,
    marraigeCertificate:req.body.marraigeCertificate,
    passportType:req.body.passportType,
    from:req.body.from,
    //userId:req.body.userId,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(406);
    return res.json(
      errorFunction(true, `Error in Customer Data : ${error.message}`)
    );
  } else {
    next();
  }
};

module.exports = customerValidation;
