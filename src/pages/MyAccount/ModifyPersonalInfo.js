import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { changeValue, toggleSavedData, updatePersonalInfo } from '../../actions';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Error from '../../components/Error';
import Input from '../../components/Input';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import SectionHeader from '../../components/SectionHeader';
import useInitError from '../../hooks/useInitError';

function ModifyPersonalInfo() {
  useInitError();
  const dispatch = useDispatch();

  const isSaved = useSelector((state) => state.user.dataSaved);
  const [checkIsSaved, setCheckIsSaved] = useState(false);

  useEffect(() => {
    if (isSaved) {
      dispatch(toggleSavedData());
    }
    setCheckIsSaved(false);
  }, []);

  const isError = useSelector((state) => state.user.error);
  const errorMsg = useSelector((state) => state.user.errorMsg);

  const handleSelectPronoun = (event) => dispatch(changeValue(event.target.value, 'pronoun'));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePersonalInfo());
    setCheckIsSaved(true);
  };

  if (checkIsSaved) {
    return <Navigate to="/mon-compte" replace />;
  }

  return (
    <Page>
      <Container>
        <Panel>
          <SectionHeader title="Modifier mes informations personnelles" subtitle="Les champs marqués d’une étoile sont obligatoires." />
          {isError && <Error msg={errorMsg} />}
          <form onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="lastname">Mon nom de famille</label>
              <Input
                name="lastname"
                type="text"
                placeholder="Nom de famille..."
                aria-label="Changer votre nom de famille"
                id="lastname"
              />
            </div>
            <div className="form__field">
              <label htmlFor="firstname">Mon prénom</label>
              <Input
                name="firstname"
                type="text"
                placeholder="Prénom..."
                aria-label="Changer votre prénom"
                id="firstname"
              />
            </div>
            <div className="form__field">
              <label htmlFor="birthdate">Ma date de naissance *</label>
              <Input
                type="date"
                name="birthdate"
                id="birthdate"
                required
                placeholder="Votre date de naissance..."
                aria-label="Saisissez votre  date de naissance"
              />
            </div>
            <div className="form__field">
              <label htmlFor="postal_code">Mon Code postal</label>
              <Input
                name="postal_code"
                type="text"
                placeholder="Code postal..."
                aria-label="Changer votre code postal"
                id="postal_code"
              />
            </div>
            <div className="form__field">
              <label htmlFor="pronoun">Mon pronom</label>
              <select name="condition" id="pronoun" className="select-input" onChange={handleSelectPronoun}>
                <option className="select-input__option" value="">Choisissez une option...</option>
                <option className="select-input__option" value="1">Il</option>
                <option className="select-input__option" value="2">Elle</option>
                <option className="select-input__option" value="3">Je me définis autrement</option>
              </select>
            </div>
            <Button label="Enregistrer mes informations personnelles" type="submit" tabIndex="0" />
          </form>
        </Panel>
      </Container>
    </Page>
  );
}

export default ModifyPersonalInfo;
