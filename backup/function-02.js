/*
column: filter theo cot nao (id, name, price)
value: gia tri can filter ('brand_id, 'ap', dataProduct)
    loc tat ca san pham trong dataProduct co cot brand_id='ap'
data: mang can filter
Ham return mang moi 

*/
function filterProduct(column, value, data)
{
    if (column=='brand_id')
    {
        return data.filter( item=>item.brand_id == value )
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
    if (column=='id')
        return data.filter(item => item.id== value )
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
    let data = filterProduct('id', id, dataProduct)
    let cart = localStorage.getItem('cartLocalStorage');//string
    // cart=null
    if (cart != null){ //co data cu
        cart =  JSON.parse(cart);//convert string to object
        console.log(cart)
        cart.push(data[0])
    }
    else cart= data

    console.log(id,  cart)
    localStorage.setItem('cartLocalStorage', JSON.stringify(cart))
}

