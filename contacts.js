const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join('db','contacts.json');
 

async function listContacts() {
    try {
        const data = await fs.readFile('contactsPath');
    }
    catch (err) {
        console.log('err');
         return JSON.parse(data);
    }
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
     try {

    }
    catch (err) {
        console.log('err');
    }
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
     try {
         const data = await fs.promises.readFile('contactsPath');
    const contacts = JSON.parse(data);
    const filteredContacts = contacts.filter(c => c.id !== id);
    await fs.promises.writeFile('contactsPath', JSON.stringify(filteredContacts));
    }
    catch (err) {
        console.log('err');
         
    }
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
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