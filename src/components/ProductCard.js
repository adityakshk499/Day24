import {BsFillStarFill} from 'react-icons/bs'



function ProductCard({image , title , price , count , rating ,description}){

    return(
    <>
           <div className="w-28 h-18"><img  src={image} alt="productimage"  /></div>
    
    <div className="flex-col flex p-2">
      <p>{title.slice(0,50)}</p>
      <p>${price}</p>
      <p>{count} left</p>
      <p className='flex'>{rating} {<BsFillStarFill/>}</p>
      <p>{description.slice(0,150)}....</p>
    </div>
    </>
    )
}

export default ProductCard;