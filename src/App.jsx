import Brands from 'components/brands/Brands';
import Header from './components/header/Header';
import Promo from 'components/promo/Promo';
import Card from 'components/card/Card';
import Arrivals from 'components/arrivals/Arrivals';
import Sale from './components/sale/sale';
// import  Login  from 'pages/login/Login';
import ShopCommunity from './components/shopCommunity/ShopCommunity'



export const App = () => {

  return (
    <div>
      {/* <Login/> */}
      <Header />
      <Promo />
      <Brands />
       <Arrivals/>
      <Card />
      <Sale />
      <ShopCommunity/>
     
    </div>
  );
};


