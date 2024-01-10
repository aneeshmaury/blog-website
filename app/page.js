
import Navbar from "./components/navbar";
/*import MultiActionAreaCard from "./components/cardui";*/
import Making from "./components/cards";
import UncontrolledExample from "./components/corusal";
//import Multicard from "./components/multicards";

export default function Home() {
 

  return (
    <>
   
    <div className="bg-zinc-900">
         <Navbar />
         <UncontrolledExample/>
<Making/>
    </div>
   
     
    </>
  );
}
