import { program } from "commander";
const contacts = require('./contacts')
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
      const allContacts = await contacts.listContacts
      return console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
return console.table(oneContact)
      break;

    case "add":
      const newContact = await contacts.addContact({
        name, email, phone
      });
      return console.table(newContact)
      break;

    case "remove":
      const dellContact = await contacts.removeContact(id)
      return console.table(dellContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
