import { Space } from "nobox-client";
import { createSchema } from "./config";

interface Account {
  name: string;
  email: string;
  password: string;
}

export const AccountStructure: Space<Account> = {
  space: "Accounts",
  description: "A Record Space for Accounts",
  structure: {
    name: {
      description: "Account's Name",
      required: true,
      type: String,
    },
    email: {
      description: "Account's Email",
      type: String,
      required: true,
    },
    password: {
      description: "Account's Password",
      required: true,
      type: String,
    },
  },
};

export const AccountModel = createSchema<Account>(AccountStructure);
