import Card from "../Component/Card/Card.jsx";
import './HomePage.css'
import Data from './../Data/Data.json'


export default function HomePage() {
  console.log(Data);
  return (
    <>
      <div className="HomePage">
        {
          Data.map((e,i)=>{
            return(
              <Card  Data={e} key={i}/>
            )
          })
        }
       
      </div>
    </>
  );
}
