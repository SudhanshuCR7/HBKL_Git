import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([])

    const filterRestaurant = (restaurantArray,search) => {
        setFilteredRestaurants(restaurantArray.filter((res) => res.data.name.toLowerCase().includes(search.toLowerCase())))
    }

    useEffect(() => {
         getRestaurants()
    },[])

    async function getRestaurants () {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4335218&lng=80.3313385&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setAllRestaurants(json.data.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json.data.cards[2]?.data?.data?.cards)
    }

    return filteredRestaurants.length === 0 ? <Shimmer/> : 
    (
    <div>

        <div>
        <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value) }  />
        <button onClick={() => {filterRestaurant(allRestaurants,searchText)}}>Search</button>
        </div>

        <div className="list-of-restaurants">
        {
           filteredRestaurants.map((res) => {return(<RestaurantCard key={res.data.id} restaurant={res}/>)})
        }
        </div>

    </div>
    )
    }  

export default Body;