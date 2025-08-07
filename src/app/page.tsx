
import HomeDisplay from "./components/homedisplay";
import MiddleImageScreen from "./components/mainscreen";
import AboutUsDescriptions from "./components/aboutusDesc";
import BottomEnginnering from "./components/bottonEnginnering";

export default function Home() {
  return (
    <div className="hide-scrollbar">

      <HomeDisplay/>

      <MiddleImageScreen/>

      <AboutUsDescriptions/>

      <BottomEnginnering/>
    </div>
 
  );
}
