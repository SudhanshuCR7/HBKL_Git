import RestaurantCard from "./RestaurantCard";
import { restData2 } from "../../constant";
import { useState } from "react";

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restData2);

    const filterRestaurant = (restaurantArray,search) => {
        setRestaurants(restaurantArray.filter((res) => res.data.name.toLowerCase().includes(search.toLowerCase())))
    }

    return(
    <div>

        <div>
        <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value) }  />
        <button onClick={() => {filterRestaurant(restaurants,searchText)}}>Search</button>
        </div>

        <div className="list-of-restaurants">
        {
           restaurants.map((res) => {return(<RestaurantCard key={res.data.id} restaurant={res}/>)})
        }
        </div>

    </div>
    )
    }  

export default Body;