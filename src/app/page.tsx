import Image from "next/image";
import HomeDisplay from "./components/homedisplay";
import MiddleImageScreen from "./components/mainscreen";
import AboutUsDescriptions from "./components/aboutusDesc";

export default function Home() {
  return (
    <div>

      <HomeDisplay/>

      <MiddleImageScreen/>

      <AboutUsDescriptions/>
    </div>
 
  );
}
