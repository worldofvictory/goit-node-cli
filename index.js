import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts()
      console.table(contactsList);
      break;
      

    case "get":
      const oneContact = await getContactById(id);
      console.table(oneContact)
      break;

    case "add":
      const newContacts = await addContact(
        name, email, phone
      );
      console.table(newContacts)
      break;

    case "remove":
      const dellContact = await removeContact(id)
      console.table(dellContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
