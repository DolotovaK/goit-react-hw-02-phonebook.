import css from './ContactItem.module.css'; 

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p className={css.name}>{name}: {number}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => { onDelete(id) }}
      >
        Delete
      </button>
    </>
  );
};