
import Navbar from "./components/navbar";
/*import MultiActionAreaCard from "./components/cardui";*/
import Making from "./components/cards";
//import Multicard from "./components/multicards";

export default function Home() {
 

  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@100;200;300&display=swap" rel="stylesheet"></link>
    <div className="bg-zinc-900">
         <Navbar />
<Making/>
    </div>
   
     
    </>
  );
}
