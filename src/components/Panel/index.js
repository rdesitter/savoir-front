import PropTypes from 'prop-types';
import './style.scss';

function Panel({ children, maxWidth, ...props }) {
  return (
    <section className="panel" style={{ maxWidth: maxWidth }} {...props}>
      {children}
    </section>
  );
}

Panel.defaultProps = {
  maxWidth: '100%',
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
};

export default Panel;
