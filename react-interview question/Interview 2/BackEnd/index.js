import express from 'express'

const app = express();

app.get('/api/products', (req, res)=>{
    const products =[
        {
            id: 1,
            name: 'table wooden',
            price: 100,
            image: 'https://images.pexels.com/photos/1632849/pexels-photo-1632849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'table plastic',
            price: 200,
            image: 'https://images.pexels.com/photos/1632849/pexels-photo-1632849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: 'table aluminum',
            price: 300,
            image: 'https://images.pexels.com/photos/1632849/pexels-photo-1632849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 4,
            name: 'table copper',
            price: 400,
            image: 'https://images.pexels.com/photos/1632849/pexels-photo-1632849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            name: 'table steel',
            price: 500,
            image: 'https://images.pexels.com/photos/1632849/pexels-photo-1632849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }

    ]

    if(req.query.search){
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(filteredProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    },)
})


const port= process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

