import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Container from '../../components/Container';
import AccountDetails from '../../components/Accountdetails';
import Button from '../../components/Button';
import Page from '../../components/Page';
import Panel from '../../components/Panel';

import './style.scss';
import Thumbnail from '../../components/Thumbnail';


function Annonce() {
  return (
    <Page>
      <Container>
        <div className="informations">
          <section className="post-infos__label">
            <Label label="informatique" />
            <Label label="rencontre" />
          </section>
          <p className="post-infos__date">Annonce publiée le 12/06/2022 (created_at)</p>
          <div className="global-infos">
            <article className="post-infos">
              <Panel className="panel-info">
                <section className="post-infos__frame">
                  <img className="post-infos__img" src="./images/categories/informatique.jpg" alt="informatique" />
                </section>
                <h2 className="post-infos__title">Envie d'apprendre Gimp</h2>
                <span className="post-infos__localisation">Montpellier</span>
                <p className="post-infos__description">
                  J'aimerais apprendre à me servir de Gimp. Je suis totalement débutant mais
                  j'ai déja installé le logiciel (je suis sur Ibook).
                  J'aimerais organiser ça dans un café ou un bar. J'offre la première consommation !
                  Pour info, j'ai de bonnes notions Photoshop.
                  Ça serait sympa de profiter du beau temps pour organiser ça !
                </p>
              </Panel>
            </article>
            <div className="vignettes">
              <article className="more-infos">
                <Panel>
                  <div className="informations-bloc">
                    <h3 className="more-infos__title">Informations complémentaires</h3>
                    <ul className="more-infos__list">
                      <li className="more-infos__li"><img className="more-infos__icone" src="./images/icones/delete.svg" alt="null" />Bar/café</li>
                      <li className="more-infos__li"><img className="more-infos__icone" src="./images/icones/delete.svg" alt="null" />Non fumeur</li>
                      <li className="more-infos__li"><img className="more-infos__icone" src="./images/icones/delete.svg" alt="null" />2+</li>
                      <li className="more-infos__li"><img className="more-infos__icone" src="./images/icones/delete.svg" alt="null" />Vapotage accepté</li>
                    </ul>
                  </div>
                </Panel>
              </article>
              <article className="user-informations">
                <Panel>
                  <div className="div-panel">
                    <section className="user-infos__avatar">
                      <img className="user-infos__avatar-img" src="./images/avatars/NOHAIR3.png" alt="avatar" />
                    </section>
                    <section className="user-infos">
                      <h2 className="user-infos__name">Jeanne</h2>
                      <span className="user-infos__date">inscrit(e) depuis le 12/12/22</span>
                      <Button type="button" className="user-infos__contact" label="Contacter" />
                    </section>
                  </div>
                </Panel>
              </article>
            </div>
          </div>
        </div>
      </Container>
      <section className="more-posts">
        <h2 className="more-posts__title">Annonces similaires</h2>
        <Thumbnail />
      </section>
    </Page>

  );
}

Annonce.propTypes = {

};

export default Annonce;
