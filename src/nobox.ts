// createAccount("Apata Miracle", "prmpsmart@gmail.com", "prmpsmart");
// passwordReset("prmpsmart@gmail.com", "prmpsmart");
// id = 651139b2f2ec22c793b83952
//Step 1: import the model from the record structure folder
// import AccountModel from ;
import {AccountModel} from "./Backend/schemas/account";

// Step 2: Insert the Data you want
const insertedData = AccountModel.insertOne({
  name: "Apata Miracle",
  email: "test@gmail.com",
  password: "123456",
});
console.log(insertedData);
