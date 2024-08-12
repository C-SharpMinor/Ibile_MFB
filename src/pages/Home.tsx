import React from "react";
import "./home.css";
import Header from "../components/Header";
import Ibile from "../components/Ibile";
import Loan from "../components/Loan";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const Home: React.FC = () => {
  const images = [
    "https://media.licdn.com/dms/image/C4D1BAQHvYPHVsW9W-A/company-background_10000/0/1594371336234/ibilemicrofinancebank_cover?e=2147483647&v=beta&t=sTooypRpjFXgKZqYe72VPBNxevZ_u5FcGS7EJRUZgYo",
    "https://cdn6.aptoide.com/imgs/1/8/a/18ac9ac0fe3d559c14706ce1b31de586_screen.png",
    "https://pbs.twimg.com/media/D3T_JeBXkAAT290.jpg",
    "https://media.licdn.com/dms/image/C5622AQGMoPykp5OIrQ/feedshare-shrink_2048_1536/0/1677046849522?e=2147483647&v=beta&t=qHMQLHVn6rt8WjXQ3CBT1VC1YQWXQfbicmmqbrr-V7g",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSex8StL7c9HqKtPsFMmRKmnYweXx4Xe9iQ&s",
    "https://pbs.twimg.com/media/F_79TzjXYAA11wI?format=jpg&name=large",
  ];
  return (
    <>
      <Header />
      <div className="imgSlideContainer">
        <ImageSlider images={images} />
      </div>
      <Ibile />
      <Loan />
      <Footer />
    </>
  );
};

export default Home;
