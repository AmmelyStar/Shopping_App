import Brands from 'components/brands/Brands';
import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Card from 'components/card/Card';
import Arrivals from 'components/arrivals/Arrivals';
import  Login  from 'pages/login/Login';




export const App = () => {

  return (
    <div>
      <Login/>
      <Header />
      <Promo />
      <Brands />
       <Arrivals/>
      <Card />
     
    </div>
  );
};


