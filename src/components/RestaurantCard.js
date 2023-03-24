const RestaurantCard = (props) => {
    return(
      <div className="card">
        <img 
        alt="burger-king" 
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data.cloudinaryImageId}/>
        <h3>{props.restaurant.data.name}</h3>
        <h3>{props.restaurant.data.cuisines.join(',')}</h3>
        <h3>{props.restaurant.data.costForTwoString}</h3>
      </div>
    )
  }

  export default RestaurantCard;