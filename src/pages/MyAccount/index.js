/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import './style.scss';

function MyAccount() {
  const {
    username, avatar, created_at, about,
  } = useSelector((state) => state.user);
  return (
    <Page>
      <Container>
        <Panel>
          <div className="account">
            <div className="account__avatar">
              <img className="account__avatar__img" src={`./images/avatars/${avatar}.png`} alt={avatar} />
            </div>
            <div className="account__info">
              <h2 className="account__title">{username}</h2>
              <p className="account__creation">Inscrit depuis le {created_at}</p>
              <h2 className="account__title">A propos de moi</h2>
              <p className="account__about">{about}</p>
              <span className="spacer" />
              <Button label="Modifier mon profil public" />
            </div>
          </div>
        </Panel>
      </Container>
    </Page>
  );
}

export default MyAccount;
