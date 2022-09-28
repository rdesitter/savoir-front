import { useState } from 'react';
import Page from 'src/components/Page';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Panel from '../../components/Panel';

import './style.scss';

function Inscription() {
  /* Handle password visibility */
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  // TODO Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO checker si les mots de passe sont identiques
    // TODO checker si l'email est ok (regex)
    // TODO côté back checker si email & username sont déjà utilisés
    console.log('Inscription');
  };

  return (
    <Page>
      <Container style={{ maxWidth: '37.5em' }}>
        <Panel>
          <header className="section__header">
            <h1 className="section__title">Inscription</h1>
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

            <div className="form__field">
              <label htmlFor="password-confirm">Confirmation du mot de passe *</label>
              <button
                className="password__helper"
                type="button"
                onClick={() => setIsConfirmVisible(!isConfirmVisible)}
              >
                {isConfirmVisible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              </button>
              <Input
                type={isConfirmVisible ? 'text' : 'password'}
                name="passwordConfirm"
                id="password-confirm"
                required
                placeholder="Votre mot de passe..."
                aria-label="Saisissez votre mot de passe"
              />
              <p className="form__field__error">Erreur</p>
            </div>

            <div className="form__field">
              <label htmlFor="username">Nom d'utilisateur *</label>
              <Input
                type="text"
                name="username"
                id="username"
                required
                placeholder="Votre nom d'utilisateur..."
                aria-label="Saisissez votre nom d'utilisateur"
              />
              <p className="form__field__error">Erreur</p>
            </div>

            <div className="form__field">
              <label htmlFor="username">Date de naissance *</label>
              <Input
                type="date"
                name="birthday"
                id="birthday"
                required
                placeholder="Votre date de naissance..."
                aria-label="Saisissez votre  date de naissance"
              />
              <p className="form__field__error">Erreur</p>
            </div>

            <div className="form__submit">
              <button type="submit" className="button button--plain" title="Je me connecte">Je m'inscris</button>
              <p className="form__submit__info">En cliquant sur ce bouton vous serez redirigé vers la page d’accueil.</p>
            </div>
          </form>

        </Panel>
      </Container>
    </Page>
  );
}

export default Inscription;
