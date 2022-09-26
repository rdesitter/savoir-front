import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Page from 'src/components/Page';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Panel from '../../components/Panel';
import { logIn } from '../../actions';

import './style.scss';

function Connexion() {
  /* Handle password visibility */
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  // TODO Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn());
  };

  return (
    <Page>
      <Container>
        <Panel maxWidth="500px">
          <header className="section__header">
            <h1 className="section__title">Connexion</h1>
            <p className="section__subtitle">Les champs marqués d’une étoile sont obligatoires.</p>
          </header>
          <p className="form__error">Erreur</p>
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
              <p className="form__field__error">Erreur</p>
            </div>

            <div className="form__field">
              <label htmlFor="password">Mot de passe *</label>
              <button
                className="password__helper"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              </button>
              <Input
                type={isVisible ? 'text' : 'password'}
                name="password"
                id="password"
                required
                placeholder="Votre mot de passe..."
                aria-label="Saisissez votre mot de passe"
              />
              <p className="form__field__error">Erreur</p>
            </div>

            <div className="form__submit">
              <button type="submit" className="button button--plain" title="Je me connecte">Je me connecte</button>
              <p className="form__submit__info">En cliquant sur ce bouton vous serez redirigé vers la page d’accueil.</p>
            </div>
          </form>

        </Panel>
      </Container>
    </Page>
  );
}

export default Connexion;
