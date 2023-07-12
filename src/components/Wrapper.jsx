
import { useContext } from 'react';
import ButtonDarkMode from './ButtonDarkMode';
import CardPhrase from './CardPhrase';
import { DarkModeContext } from '../context';

const Wrapper = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  return (
    <section style={{backgroundColor: darkMode ? '#000' : '#fff'}}>
      <ButtonDarkMode />
      <CardPhrase />
    </section>
  );
};

export default Wrapper;