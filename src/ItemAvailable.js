import React from "react"

export default function ItemAvailable(props) {
    const { items = [] } = props
    return <div className='boxItem'>

        {items.map((item,index) => {
            console.log(item);
            
            let itemPresentation =
                <div className="itemAvailable" key={index}>
                    <div className='imeDiv'>
                        {<img className='itemImg' src={item.image} alt={item.name}/>}
                            <br />
                            ש"ח
                        
                    </div>
                    <div className='itemPrice'>{item.price}
                    </div>

                </div>
            return itemPresentation
        })}
    </div>
}