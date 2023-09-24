import styles from "./style.module.css"

export const FormNewsletter = () => {
    return (
        <form className={`formulary ${styles.form}`}>
            <input type="email" required placeholder="E-mail" />
            <button className="btn" type="submit">CADASTRAR-SE</button>
        </form>
    )
}