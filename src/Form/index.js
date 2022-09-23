import "./style.css";

const Form = () => (
    <form className="form">
                <input className="form__field" required type="text" name="lista"
                    placeholder="Co jest do zrobienia?" maxLength="70" autoComplete="off"/>
                <button className="form__button">Dodaj zadanie</button>
            </form>
);

export default Form;
