import { withRouter } from 'react-router-dom';

const HotKeys = ({ history }) => {
  const pressed = new Set();

  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);

    if (pressed.size === 2 && e.altKey) {
      if (pressed.has('KeyN')) {
        e.preventDefault();
        history.push('/newgame');
      }
      if (pressed.has('KeyS')) {
        e.preventDefault();
        history.push('/saved');
      }
      if (pressed.has('KeyT')) {
        e.preventDefault();
        history.push('/statistics');
      }
      if (pressed.has('KeyA')) {
        e.preventDefault();
        history.push('/autoplay');
      }
      if (pressed.has('KeyW')) {
        e.preventDefault();
        history.push('/');
      }

      pressed.clear();
    }
  });

  document.addEventListener('keyup', (e) => {
    pressed.delete(e.code);
  });

  return null;
};

export default withRouter(HotKeys);
