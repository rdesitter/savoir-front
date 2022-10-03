import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeValuePost, getCategories, newPost, resetNewPost,
} from '../../actions';
import Button from '../../components/Button';
import Container from '../../components/Container';
import InputCreatePost from '../../components/InputCreatePost';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import './style.scss';

function CreatePost() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isNewPost, setIsNewPost] = useState(false);

  const type = useSelector((state) => state.postCreation.type);
  const title = useSelector((state) => state.postCreation.title);
  const category = useSelector((state) => state.postCreation.category);
  const condition = useSelector((state) => state.postCreation.condition);
  const description = useSelector((state) => state.postCreation.description);
  const token = useSelector((state) => state.user.token);
  const msg = useSelector((state) => state.informations.msg);
  const newPostObject = useSelector((state) => state.postCreation.newpost);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetNewPost());
    setIsNewPost(false);
  }, []);

  useEffect(() => {
    if (isNewPost) {
      navigate(`/annonces/${newPostObject.id}`);
    }
  }, [newPostObject]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(newPost({
      type, title, category, condition, description,
    }, token));
    setLoading(false);
    setIsNewPost(true);
    if (isNewPost) {
      navigate(`/annonces/${newPostObject.id}`);
    }
  };

  const handleChangeTextArea = (event) => dispatch(changeValuePost(event.target.value, 'description'));
  const handleSelectCategory = (event) => dispatch(changeValuePost(event.target.value, 'category'));
  const handleSelectPlace = (event) => dispatch(changeValuePost(event.target.value, 'condition'));

  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <Page>
      <Container>
        <Panel>
          <header className="section__header">
            <h1 className="section__title">Nouvelle annonce</h1>
            <p className="section__subtitle">Les champs marqués d’une étoile sont obligatoires.</p>
          </header>
          {msg && <p>{msg}</p>}
          {loading && <p>Chargement en cours...</p>}
          {!loading && (
            <form onSubmit={handleSubmit} className="form add-post">
              <fieldset className="add-post__fieldset">
                <legend className="add-post__legend">Vous souhaitez publier une annonce pour ? *</legend>
                <div className="radio__group">
                  <InputCreatePost
                    className="radio__btn"
                    type="radio"
                    name="type"
                    id="learn"
                    value="1"
                    required
                  />
                  <label className="radio__label" htmlFor="learn" aria-label="Apprendre">Apprendre</label>
                  <span>ou</span>
                  <InputCreatePost className="radio__label" type="radio" name="type" id="share" value="2" required />
                  <label className="radio__label" htmlFor="share" aria-label="Partager">Partager</label>
                </div>
              </fieldset>
              <div className="form__field">
                <label htmlFor="post-title">Titre de l'annonce * <span className="label__helper">60 caractères maximum</span></label>
                <InputCreatePost
                  name="title"
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
                    {categories.map((categoryItem) => (
                      <option
                        value={categoryItem.id}
                        key={categoryItem.id}
                      >
                        {categoryItem.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form__field">
                  <label htmlFor="post-place">Type d'échange *</label>
                  <select name="condition" id="post-place" className="select-input" onChange={handleSelectPlace}>
                    <option className="select-input__option" value="">Choisissez une option...</option>
                    <option className="select-input__option" value="2">Distanciel</option>
                    <option className="select-input__option" value="1">Présentiel</option>
                  </select>
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="post-description">Votre annonce *</label>
                <textarea
                  name="description"
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
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default CreatePost;
