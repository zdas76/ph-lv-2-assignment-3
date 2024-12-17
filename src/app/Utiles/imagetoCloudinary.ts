import { v2 as cloudinary } from "cloudinary";
import config from "../config";
import multer from "multer";
// import fs from "fs";

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
});

export const sendImageToCloudinary = async (
  imageName: string,
  path: string
) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(path, {
      public_id: imageName,
    });
    console.log(uploadResult);
    // fs.unlink(path, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("File is deleted.");
    //   }
    // });

    return uploadResult;
  } catch (error) {
    console.log(error);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
