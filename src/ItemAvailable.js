import React from "react"

export default function ItemAvailable(props) {
    const { items = [] } = props

    return <div className='boxItem'>

        {items.map((item, index) => {
            let btn = <div className='addToCart' key={index} onClick={(e) => { props.selectedItem(item) }} >הוסף לעגלה</div>
            if (item.count <= 1)
                btn = <div className='addToCartNamber'  key={index}>
                    <div className='addToCartP'onClick={(e)=>{props.changeItemCountPlus(item)}}>+</div>
                    <h2 className="cuntNumber">{props.cartItem, item.count}</h2>
                    <div className='addToCartM'onClick={(e)=>{props.changeItemCountMinus(item)}}>-</div>
                </div>

            const itemPresentation =
                <div className="itemAvailable" key={index}>

                    <div className='imeDiv'>
                        <img className='itemImg' src={item.image} alt={item.name} />
                        <br />
                    </div>
                    <div className='itemName'>
                        {item.name}
                    </div>
                    <div className='itemPrice'>
                        {item.price} ש"ח
                    </div>
                    {btn}

                </div>
            return itemPresentation
        })}
    </div >
}