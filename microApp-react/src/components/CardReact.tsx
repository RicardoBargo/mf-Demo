import Logo from '../assets/img/Colore.jpg'

const products = [
  {
    id: 1,
    name: 'Camiseta Basica Negro',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Parte delantera de la camiseta básica para hombre en color negro.",
    price: '$35.000',
    color: 'Negra',
  },
  {
    id: 2,
    name: 'Camiseta Basica Blanca',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Parte delantera de la camiseta básica para hombre en color blanco.",
    price: '$35.000',
    color: 'Blanca',
  },
  {
    id: 3,
    name: 'Camiseta Basica Gris',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Parte delantera de la camiseta básica para hombre en color gris.",
    price: '$35.000',
    color: 'gris',
  },
  {
    id: 4,
    name: 'Camiseta Basica Salmon',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Parte delantera de la camiseta básica para hombre en color salmon.",
    price: '$35.000',
    color: 'Salmon',
  },
  
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          <img src={Logo} alt="logo" className="mx-auto w-42" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}