const mongoose = require("mongoose");
const User = require("../../auth/models/user");
const { Schema } = mongoose;

const customerSchema = Schema(
  {
    appProvince: {
      type: String,
      required: true,
      trim: true,
    },
    appDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    appLocation: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    birthDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    dobAd: {
      type: Date,
      required: true,
      trim: true,
    },
    dobBs: {
      type: Date,
      required: true,
      trim: true,
    },
    fatherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    motherFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    motherMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    motherLastName: {
      type: String,
      required: true,
      trim: true,
    },
    citizenshipNumber: {
      type: String,
      required: true,
      trim: true,
    },
    issueDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfIssue: {
      type: Date,
      required: true,
      trim: true,
    },
    province: {
      type: String,
      required: true,
      trim: true,
    },
    district: {
      type: String,
      required: true,
      trim: true,
    },
    muncipality: {
      type: String,
      required: true,
      trim: true,
    },
    wardNo: {
      type: String,
      required: true,
      trim: true,
    },
    village: {
      type: String,
      required: true,
      trim: true,
    },
    emergeencyFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    emergeencyMiddleName: {
      type: String,
      required: true,
      trim: true,
    },
    emergeencyLastName: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyProvince: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    emergencyMuncipality: {
      type: String,
      required: true,
      trim: true,
    },
    emergeencyWardNo: {
      type: String,
      required: true,
      trim: true,
    },
    emergeencyVillage: {
      type: String,
      required: true,
      trim: true,
    },
    citizenshipFront: {
      type: String,
      required: true,
      trim: true,
    },
    citizenshipBack: {
      type: String,
      required: true,
      trim: true,
    },
    marraigeCertificate: {
      type: String,
      required: false,
      trim: true,
    },
    passportType: {
      type: String,
      required: true,
      trim: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
    },
    // userId :{
    //   type:Schema.ObjectId,
    //   ref:User,
    //   required:true
    // }


  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;