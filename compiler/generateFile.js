const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

//now we have to create file with unique name(with the help of uuid)
const generateFile = (language, code) => {
  const jobID = uuid(); //new id generated
  console.log(jobID);

  const filename = `${jobID}.${language}`;
  const filePath = path.join(dirCodes, filename);

  fs.writeFileSync(filePath, code);

  return filePath;
};

module.exports = {
  generateFile,
};
