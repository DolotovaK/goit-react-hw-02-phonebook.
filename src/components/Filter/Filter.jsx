import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
    return (
        <div className={css.filter}>
            <p className={css.title}>Find Contacts by name</p>
            <input className={css.input} type="text" value={value} onChange={onChange} />
        </div>
    );
}