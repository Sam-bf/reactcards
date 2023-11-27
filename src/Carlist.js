import Cars from "./Cars"
import { Car } from "./Product"
const Carlist=()=>{
    console.log(Car)
    return (
        <div className="carsphoto">
           { Car.map((el) => (
    <Cars  x={el}/>
                    ))}
        </div>
    )
}
export default Carlist



