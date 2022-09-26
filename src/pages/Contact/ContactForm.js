import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Panel from '../../components/Panel';
import Input from '../../components/Input';

import './style.scss';
import { sendMessage, changeValue } from '../../actions';

function ContactForm() {
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(changeValue(event.target.value, 'message'));

  // TODO Gestion message envoyé / erreur d'envoi
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendMessage());
  };

  return (
    <Panel>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="email">Adresse email *</label>
          <Input
            name="email"
            type="email"
            required
            placeholder="Votre adresse email..."
            aria-label="Saisissez votre email"
            id="email"
          />
        </div>
        <div className="form__field">
          <label htmlFor="email">Votre nom *</label>
          <Input
            name="fullname"
            type="text"
            required
            placeholder="Votre nom..."
            aria-label="Saisissez votre nom"
            id="fullname"
          />
        </div>
        <div className="form__field">
          <label htmlFor="email">Votre message *</label>
          <textarea
            name="message"
            required
            placeholder="Votre message..."
            aria-label="Saisissez votre message"
            id="message"
            rows="5"
            onChange={handleChange}
          />
        </div>

        <Button isSubmit label="Envoyer le message" />
      </form>
    </Panel>
  );
}

export default ContactForm;
