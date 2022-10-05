import { useDispatch } from 'react-redux';
import { changeValue } from '../../actions';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import SectionHeader from '../../components/SectionHeader';

function ModifyPublicInfo() {
  const dispatch = useDispatch();
  const handleChangeTextArea = (event) => dispatch(changeValue(event.target.value, 'description'));
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit')
  }
  return (
    <Page>
      <Container>
        <Panel>
          <SectionHeader title="Modifier mon profil public" />
          <form onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="username">Nom d'utilisateur</label>
              <Input
                name="username"
                type="text"
                required
                placeholder="Nom d'utilisateur..."
                aria-label="Changer votre nom d'utilisateur"
                id="username"
              />
            </div>
            <div className="form__field">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Votre description..."
                aria-label="Saisissez votre description"
                id="description"
                rows="5"
                onChange={handleChangeTextArea}
              />
            </div>
            <Button label="Enregistrer mon profil" type="submit" tabIndex="0" />
          </form>
        </Panel>
      </Container>
    </Page>
  );
}

export default ModifyPublicInfo;
