// const argv = require("yargs").argv;
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

console.log(process.argv);
const arr = hideBin(process.argv);
// console.log(arr);
const { argv } = yargs(arr);
// console.log(argv);
invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "2" });
// invokeAction({
//   action: "add",
//   name: "Vita",
//   email: "Kostiuk",
//   phone: "555-88-78",
// });
// invokeAction({ action: "remove", id: "1" });

////////////////////////////////////
// const actionIdx = process.argv.indexOf("--action");
// if (actionIdx !== -1) {
//   const action = process.argv[actionIdx + 1];
//   invokeAction({ action });
// }
///////////////////////////////////////
