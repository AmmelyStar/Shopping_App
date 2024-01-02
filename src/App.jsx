import Brands from 'components/brands/Brands';
import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Card from 'components/card/Card';
import Arrivals from 'components/arrivals/Arrivals';


export const App = () => {

  return (
    <div>
      <Header />
      <Promo />
      <Brands />
       <Arrivals/>
      <Card />
     
    </div>
  );
};
