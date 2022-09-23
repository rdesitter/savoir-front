import { useState } from 'react';
import Page from 'src/components/Page';
import Container from '../../components/Container';
import Panel from '../../components/Panel';

import './style.scss';

function Team() {
  /* Handle password visibility */
  const [isVisible, setIsVisible] = useState(false);

  // TODO Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Connexion');
  };

  return (
    <Page>
      <Container>
        <Panel>
          <header className="section__header">
            <h1 className="section__title">Connexion</h1>
            <p className="section__subtitle">Les champs marqués d’une étoile sont obligatoires.</p>
          </header>
          <p className="form__error">Erreur</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="email">Adresse email *</label>
              <input type="email" name="email" id="email" placeholder="Votre adresse email..." />
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
              <input type={isVisible ? 'text' : 'password'} name="password" id="password" placeholder="Votre mot de passe..." />
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

export default Team;
