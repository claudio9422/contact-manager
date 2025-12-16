import Header from './components/Header';
import ContactList from './components/ContactList';

const contacts = [
  { id: 1, name: "Ana García", phone: "+1 (555) 123-4567", email: "ana@email.com", rol:"Amigo", isFavorite: true },
  { id: 2, name: "Carlos López", phone: "+1 (555) 987-6543", email: "carlos@email.com", rol:"Trabajo", isFavorite: false },
  { id: 3, name: "María Torres", phone: "+1 (555) 456-7890", email: "maria@email.com", rol:"Familia", isFavorite: true }
];

export default function App() {
  const favoriteCount = contacts.filter(function(c) {
    return c.isFavorite;
  }).length;

  const favoriteContacts = contacts.filter(contact => contact.isFavorite);

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Header />

      <p style={{ color: '#666' }}>
        Total: {contacts.length} contactos | Favoritos: {favoriteCount}
      </p>

      <ContactList contacts={favoriteContacts} />
    </div>
  );
}
