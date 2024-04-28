import './App.css';
import Section from './components/section1';
import CustomCard from './components/custom_card';
import Info from './components/info';
import ButtonComponent from './components/carousel_button/buttons';
import SocialMedia from './components/social_media/social_media';
import EndPage from './components/end_page';

function App() {
  return (
    <div>
      <Section />
      <CustomCard />
      <Info />
      <ButtonComponent />
      <SocialMedia />
      <EndPage />
    </div>
  );
}

export default App;
