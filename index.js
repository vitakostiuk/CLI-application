// Испольован модуль commander для парсинга аргументов командной строки
//
const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
console.log(argv);

// TODO: рефакторить
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

invokeAction(argv);

// Испольован пакет yargs для парсинга аргументов командной строки
//
// // const argv = require("yargs").argv;
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

// const contacts = require("./contacts");

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contactsList = await contacts.listContacts();
//       console.log(contactsList);
//       break;

//     case "get":
//       const contactById = await contacts.getContactById(id);
//       console.log(contactById);
//       break;

//     case "add":
//       const newContact = await contacts.addContact(name, email, phone);
//       console.log(newContact);
//       break;

//     case "remove":
//       const removeContact = await contacts.removeContact(id);
//       console.log(removeContact);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// // // Вызов функции invokeAction
// // invokeAction({ action: "list" });
// // invokeAction({ action: "get", id: "2" });
// // invokeAction({
// //   action: "add",
// //   name: "Vita",
// //   email: "Kostiuk",
// //   phone: "555-88-78",
// // });
// // invokeAction({ action: "remove", id: "1" });

// // console.log(process.argv);
// const arr = hideBin(process.argv);
// // console.log(arr);
// const { argv } = yargs(arr);
// // console.log(argv);
// invokeAction(argv);
