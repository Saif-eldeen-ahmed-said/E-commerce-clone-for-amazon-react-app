
export const initstate={
    basket: [],
    user: null,
    itemView:[]
}


export const theprice=(basket)=>basket.reduce((amount,item)=>(item.price *item.count) + amount,0);
export const totalCount=(basket)=>basket.reduce((quantity,item)=>item.count + quantity,0)

const reducer = (state,action) => {
    
    switch(action.type) {
        case 'add-to-basket' : {

let theBasket = [...state.basket,action.item]

let theIndex=state.basket.findIndex(
    (item)=>item.title === action.item.title
)



if(theIndex >=0) {
 theBasket.splice(theIndex,1)
} 

    return {
        ...state,
        basket:theBasket
    }
}    

        case 'remove' : 
        let index=state.basket.findIndex(
            (item)=>item.title === action.item.title
        )
        let newbasket=[...state.basket];

        if (index >= 0 ){
            newbasket.splice(index,1)}
        else {
            console.warn("error this item is not available");
        }

        return  {
            ...state,basket:newbasket
        }

        case "log-user" :return {
            ...state, 
            user: action.user
        }
        case "increase":
        let incProduct =state.basket.find(
        (item)=> item.title === action.item.title
        )
        if (incProduct && incProduct.count <= 9) {
            incProduct.count++
        } 
        return {
...state,basket:[...state.basket]
        }

        case "decrease":
        let decProduct = state.basket.find(
            (item)=>item.title === action.item.title
        )
        if(decProduct && decProduct.count > 0) {
            decProduct.count--
        }
        return {
     ...state,basket:[...state.basket]
        }

        case "product-view":
            let productArr=[...state.itemView]
            productArr.splice(0,productArr.length)
            productArr.push(action.item)
            return{
                ...state,itemView:productArr
            }


        default : return state
    }
}

export  default reducer