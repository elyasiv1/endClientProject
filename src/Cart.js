import React from 'react';

export default function Cart(props) {
    const { cartItem = [] } = props
    var cartLength = cartItem.length
    var show = <div className='mainCart'>
        <h2>   העגלה ריקה</h2></div>
    console.log(cartLength);
    console.log(cartItem);

    if (cartLength <= 0) {
        return show
    }
    else if (cartLength > 0) {
        return <div className='mainCart'>

            {cartItem.map((i, index) => {
                var CartIndividual = <div className='CartIndividual' key={index} >
                    <h2> {i.name}</h2>
                    <h2>{i.price}ש"ח</h2>
                    <h2>כמות:{i.count}</h2>
                </div>  
                    show = CartIndividual

                return <div className="t">
                    {show}
                </div>

            })}
        </div>
    }
}
