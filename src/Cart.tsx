export default function Cart(){
    let counter = 0;
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in the cart : {counter} </p>
            <button>Add</button>
        </div>
    )
}