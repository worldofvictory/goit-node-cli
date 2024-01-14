const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join('db','contacts.json');
 

async function listContacts() {    // ...твій код. Повертає масив контактів.
    try {
        const data = await fs.readFile('contactsPath');
    }
    catch (err) {
        console.log('err');
         return JSON.parse(data);
    }
}

async function getContactById(contactId) {  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
     try {
       const contacts = await listContacts();
       return contacts.find(contact => contact.id === contactId) || null;
        console.log(getContactById);
    }
    catch (err) {
        console.log('err');
    }
   
}

async function removeContact(contactId) {  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
     try {
  const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  
};
    }
    catch (err) {
        console.log('err');
        return result;
    }
  
}

async function addContact(name, email, phone) {
     try {
         const contacts = JSON.parse(data);
         contacts.push(newContact);
         await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    }
    catch (err) {
         console.log(err);
        return newContact;
        
    }
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

 module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  };