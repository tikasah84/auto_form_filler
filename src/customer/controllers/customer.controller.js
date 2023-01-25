const errorFunction = require("../../utils/errorFunction");
const Customer = require("../models/customer");
const addCustomer = async (req, res, next) => {
  try {
    const existingCustomer = await Customer.findOne({
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
    }).lean(true);
    if (existingCustomer) {
      res.status(403);
      return res.json(errorFunction(true, "Customer Already Exists"));
    } else {
      const newCustomer = await Customer.create({
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
      });
      if (newCustomer) {
        const customerData = {
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
        res.status(201);
        return res.json(errorFunction(false, "Customer Created", customerData));
      } else {
        res.status(403);
        return res.json(errorFunction(true, "Error Creating Customer"));
      }
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, error));
  }
};

module.exports = { addCustomer };
