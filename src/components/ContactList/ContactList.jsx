import { ContactItem } from "components/ContactItem/ContactItem"


export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <ContactItem contact={contact} onDelete={onDeleteContact} />
                </li>
            ))}
        </ul>
    )
}