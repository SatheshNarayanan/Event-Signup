const signupData = require("../model/signupData");

const data = [
  {
    firstName: "Moses",
    lastName: "Stephen",
    gender: "Male",
    profession: "Management",
    experience: 3,
    city: "Rajapalayam",
    address: "1/12, Some address",
    contactNo: "1234567890"
  },
  {
    firstName: "Siva",
    lastName: "Prakash",
    gender: "Male",
    profession: "Student",
    experience: 0,
    city: "Palayamkottai",
    address: "1/12, Some address",
    contactNo: "0123456789"
  },
  {
    firstName: "Shivani",
    lastName: "Ram",
    gender: "Female",
    profession: "IT",
    experience: 4,
    city: "Theni",
    address: "1/12, Some address",
    contactNo: "9012345678"
  },
  {
    firstName: "Devi",
    lastName: "Karthika",
    gender: "Female",
    profession: "Content-Writer",
    experience: 7,
    city: "Srivilliputhur",
    address: "1/12, Some address",
    contactNo: "8901234567"
  },
  {
    firstName: "Mani",
    lastName: "Kandan",
    gender: "Male",
    profession: "Content-Writer",
    experience: 3,
    city: "Rajapalayam",
    address: "1/12, Some address",
    contactNo: "7890123456"
  },
  {
    firstName: "Thanga",
    lastName: "Suba",
    gender: "Female",
    profession: "Management",
    experience: 5,
    city: "Palayamkoittai",
    address: "1/12, Some address",
    contactNo: "5678901234"
  },
  {
    firstName: "Stephen",
    lastName: "France",
    gender: "Male",
    profession: "Student",
    experience: 0,
    city: "Rajapalayam",
    address: "1/12, Some address",
    contactNo: "4567890123"
  },
  {
    firstName: "Bala",
    lastName: "Murugan",
    gender: "Male",
    profession: "IT",
    experience: 4,
    city: "Rajapalayam",
    address: "1/12, Some address",
    contactNo: "3456789012"
  },
  {
    firstName: "Karthi",
    lastName: "Krishnan",
    gender: "Male",
    profession: "Management",
    experience: 2,
    city: "Rajapalayam",
    address: "1/12, Some address",
    contactNo: "2345678901"
  },
  {
    firstName: "Vignesh",
    lastName: "Babu",
    gender: "Male",
    profession: "IT",
    experience: 3,
    city: "Sivakasi",
    address: "1/12, Some address",
    contactNo: "1103456789"
  }
];

const dataSeeder = async () => {
  try {
    await signupData.sync({ force: true });
    data.forEach(async (element) => {
      const result = await signupData.create(element);
      console.log(result.get());
    });
  } catch (e) {
    console.log(e);
  }
};

dataSeeder();
