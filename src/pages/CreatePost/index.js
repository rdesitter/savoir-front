import { useDispatch } from 'react-redux';
import { changeValue } from '../../actions';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import './style.scss';

function CreatePost() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleChangeTextArea = (event) => dispatch(changeValue(event.target.value, 'post-description'));
  const handleSelectCategory = (event) => dispatch(changeValue(event.target.value, 'category'));
  const handleSelectPlace = (event) => dispatch(changeValue(event.target.value, 'post-place'));

  return (
    <Page>
      <Container>
        <Panel>
          <header className="section__header">
            <h1 className="section__title">Nouvelle annonce</h1>
            <p className="section__subtitle">Les champs marqués d’une étoile sont obligatoires.</p>
          </header>
          <form onSubmit={handleSubmit} className="form add-post">
            <fieldset className="add-post__fieldset">
              <legend className="add-post__legend">Vous souhaitez publier une annonce pour ? *</legend>
              <div className="radio__group">
                <Input
                  className="radio__btn"
                  type="radio"
                  name="learnOrShare"
                  id="learn"
                  value="learn"
                  required
                />
                <label className="radio__label" htmlFor="learn" aria-label="Apprendre">Apprendre</label>
                {/* <input type="radio" name="learnOrShare" id="learn" value="learn" required /> */}
                <span>ou</span>
                <Input className="radio__label" type="radio" name="learnOrShare" id="share" value="share" required />
                <label className="radio__label" htmlFor="share" aria-label="Partager">Partager</label>
                {/* <input type="radio" name="learnOrShare" id="share" value="share" required /> */}
              </div>
            </fieldset>
            <div className="form__field">
              <label htmlFor="post-title">Titre de l'annonce * <span className="label__helper">60 caractères maximum</span></label>
              <Input
                name="post-title"
                type="text"
                maxLength="60"
                required
                placeholder="Le titre de votre annonce..."
                aria-label="Saisissez le titre de votre annonce"
                id="post-title"
              />
            </div>
            <div className="form__group">
              <div className="form__field">
                <label htmlFor="category">Catégorie *</label>
                <select name="category" id="category" className="select-input" onChange={handleSelectCategory}>
                  <option value="">Choisissez une option...</option>
                  <option value="Categorie 1">Categorie 1</option>
                  <option value="Categorie 2">Categorie 2</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="post-place">Type d'échange *</label>
                <select name="post-place" id="post-place" className="select-input" onChange={handleSelectPlace}>
                  <option className="select-input__option" value="">Choisissez une option...</option>
                  <option className="select-input__option" value="Distanciel">Distanciel</option>
                  <option className="select-input__option" value="Présentiel">Présentiel</option>
                </select>
              </div>
            </div>
            <div className="form__field">
              <label htmlFor="post-description">Votre annonce *</label>
              <textarea
                name="post-description"
                required
                placeholder="Votre annonce..."
                aria-label="Saisissez votre annonce"
                id="post-description"
                rows="5"
                onChange={handleChangeTextArea}
              />
            </div>
            <Button type="submit" label="Publier l'annonce" />
          </form>
        </Panel>
      </Container>
    </Page>
  );
}

export default CreatePost;
