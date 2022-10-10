import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitNewEmail } from '../../actions';

import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import Input from '../../components/Input';
import Error from '../../components/Error';
import Button from '../../components/Button';

function ResetEmail() {
  const isError = useSelector((state) => state.user.error);
  const errorMsg = useSelector((state) => state.user.errorMsg);
  const loading = useSelector((state) => state.user.loading);
  const displayElt = useSelector((state) => state.user.displayElement);
  const msg = useSelector((state) => state.informations.msg);
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitNewEmail());
  };

  return (
    <Page>
      <Container>
        <Panel>
          <header className="section__header">
            <h1 className="section__title">Nouvel e-mail</h1>
            <p className="section__subtitle">Les champs marqués d’une étoile sont obligatoires.</p>
          </header>
          {isError && <Error msg={errorMsg} />}
          {(!loading && !displayElt) && (
          <form onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="email">Votre nouvel e-mail&nbsp;*</label>
              <Input
                type="email"
                name="email"
                id="new-email"
                required
                placeholder="Votre nouvel e-mail..."
                aria-label="Saisissez votre votre nouvel e-mail"
              />
            </div>

            <div className="form__submit">
              <button type="submit" className="button button--plain" title="Enregistrer mon e-mail">Enregistrer mon e-mail</button>
              <p className="form__submit__info">En cliquant sur ce bouton vous serez redirigé vers la page d’accueil.</p>
            </div>
          </form>
          )}
          {loading && <p>Chargement en cours...</p> }
          {displayElt && (
            <>
              <p>{msg}</p>
              {!logged && <Link to="/connexion"><Button label="Se connecter" /></Link>}
              {logged && <Link to="/"><Button label="Retourner à l'accueil" /></Link>}
            </>
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default ResetEmail;
