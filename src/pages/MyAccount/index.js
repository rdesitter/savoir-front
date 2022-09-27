/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import AccountDetails from '../../components/Accountdetails';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import UserPosts from '../../components/UserPosts';
import './style.scss';

function MyAccount() {
  const {
    username, avatar, created_at, about, posts,
  } = useSelector((state) => state.user);
  return (
    <Page id="mon-compte">
      <Container>
        <Panel>
          <AccountDetails
            username={username}
            avatar={avatar}
            created_at={created_at}
            about={about}
          />
        </Panel>
        <Panel>
          <UserPosts posts={posts} title="Mes annonces" />
        </Panel>
      </Container>
    </Page>
  );
}

export default MyAccount;
