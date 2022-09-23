import PropTypes from 'prop-types';
import './style.scss';

function Panel({ children }) {
  return (
    <section className="panel">
      {children}
    </section>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
