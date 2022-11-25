async function getProducts({ collection, products }) {
    const res = await fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collection,
        products,
      }),
    });
    return res.json();
  }

export default async function RootPage({ params, searchParams }) {
    const { data } = await getProducts(searchParams);
    console.log(data)
  return (
    <div>
        <h2 className="text-2xl font-bold text-center">Products</h2>
        <div className="grid grid-cols-12 gap-4 container mx-auto dark:text-black pt-4">
            { data.length > 0 ? data.map(({ uni_sku, uni_producto, uni_images, uni_precio_lista, uni_precio_costo, uni_stock }) => (
              <div key={uni_sku} className="text-black col-span-2 shadow border p-2">
                <div className="border-b-2 border-gray-600">
                    <img src={uni_images} alt={`imagen_${uni_sku}`} />
                </div>
                <p>SKU: {uni_sku}</p>
                <p>PRODUCTO: {uni_producto}</p>
                <p>PRECIO: {uni_precio_lista}</p>
                <p>STOCK: {uni_stock === 1 ? "Disponible" : "No disponible" }</p>
              </div>
            )) : (
              <div className="col-span-12"><h1 className="font-bold text-center">No hay productos disponibles</h1></div>
            ) }
        </div>
    </div>
  )
}


