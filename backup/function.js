/*
column: filter theo cot nao (id, name, price)
value: gia tri can filter ('brand_id, 'ap', dataProduct)
    loc tat ca san pham trong dataProduct co cot brand_id='ap'
data: mang can filter
Ham return mang moi 

*/
function filterProduct(column, value, data)
{
    
    if (column=='id')
    {
        return data.filter( item=>item.id == value )
    }
    if (column=='brand_id')
    {
        return data.filter( item=>item.brand_id == value )
    }
    if (column=='ptype_id')
    {
        return data.filter( item=>item.ptype_id == value )
    }

    if (column=='name')
    {
        return data.filter(item => item.name.toLowerCase().indexOf( value.toLowerCase() ) !=-1 )
    }

    if (column=='bestSeller')
    {
        return data.filter(item => item.bestSeller=== true )
    }

    if (column=='isNew')
    {
        return data.filter(item => item.isNew=== value )
    }
   
       
}


function sortBy(column, type, data)
{
    if (column=='brand_id')
    {
        return data.sort((a, b) => a.brand_id-b.brand_id)
    }

    if (column=='name')
    {
        return data.sort(data.sort((a, b) => a.name-b.name))
    }

    if (column=='price')
    {
        if (type==='inc') data.sort((a, b) => a.price-b.price)
        else data.sort((a, b) => b.price-a.price)
    }
}
//tim kiem san pham theo id
function ad2Cart(id)
{
  
    let data = filterProduct('id', id, dataProduct);//lay 1 san pham de save vao cart
    console.log(data)
    // alert(data.length);
    // data[0].quantity=1;
    
    let cart = JSON.parse(localStorage.getItem('cartLocalStorage')) || [];//string
    //  cart =  JSON.parse(cart)
    // console.log(cart)
    
    // cart=null
    if (cart)
    { 
        //co data cu
        // cart =  JSON.parse(cart);//convert string to object
        console.log(cart)
        let datacart=filterProduct('id', id, cart);
        console.log(datacart)
        console.log(datacart.length)
        if(datacart.length!=0) {
           var qt= parseInt(datacart[0].quantity); 
           qt++;
           datacart[0].quantity=qt.toString();
           console.log(datacart[0].quantity)
            }          
        else {data[0].quantity=1;cart.push(data[0])}               
                            
    }                    
    else {cart=data; cart[0].quantity=1}    
    console.log(cart)
    

   // console.log('id:',  cart)
    localStorage.setItem('cartLocalStorage', JSON.stringify(cart))
}

