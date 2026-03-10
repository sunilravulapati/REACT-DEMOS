function Products({ products }) {
    return(
        <div className="text-center grid grid-cols-3 gap-6 p-6">
            {
                products.map((m) => (
                    <div key={m.productId} className="parent border  bg-white p-4 rounded shadow">
                        <img src={m.image} alt={m.name} className="w-full h-48 object-cover"/>
                        <h1 className="font-bold text-lg mt-2">{m.name}</h1>
                        <h2>${m.price}</h2>
                        <h2>{m.brand}</h2>
                        <p className="text-sm text-gray-600">{m.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Products