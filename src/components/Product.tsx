import React from 'react';

const products = [
    {
        id: 1,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 2,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 3,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 4,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 5,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 6,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 7,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
    {
        id: 8,
        title: "Lakshmi Bhog Diamond Rice",
        imgSrc: "/images/cat-1.jpg",
        price: "$49.99",
        discount: "Save 10%",
    },
];

export default function Product() {
    return (
        <section className="">
            <h1 className="my-10 text-center text-[#1E3A8A] font-bold text-3xl hover:text-teal-500 transition-colors duration-300">
                Products
            </h1>

            <div className="grid grid-cols-5 gap-10 max-w-[80vw] mx-auto hover:scale-105 transition-none duration-500">
                {products.map((product) => (
                    <a
                        key={product.id}
                        href="#"
                        className="relative block rounded-tr-3xl border border-gray-100 hover:scale-105 hover:shadow-xl transition-none duration-300"
                    >
                        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
                            {product.discount}
                        </span>

                        <img
                            src={product.imgSrc}
                            alt={product.title}
                            className="h-60 w-full rounded-tr-3xl object-fill"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900">
                                {product.title}
                            </strong>

                            <p className="mt-2 text-pretty text-gray-700">{product.price}</p>

                            {/* Optional: Uncomment for 'Learn More' button */}
                            {/* <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
                Learn More
              </span> */}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
