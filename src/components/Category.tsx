import Link from 'next/link';
import React from 'react';

const categories = [
    {
        id: 1,
        title: "LakshmiBhog 1kg pouch",
        imgSrc: "/images/cat-1.jpg",
        href: "/lakshmibhog-1kg-pouch",
        hoverRotate: "-rotate-6",
    },
    {
        id: 2,
        title: "LakshmiBhog 1kg pouch",
        imgSrc: "/images/cat-1.jpg",
        href: "/lakshmibhog-1kg-pouch",
        hoverRotate: "rotate-6",
    },
    {
        id: 3,
        title: "LakshmiBhog 1kg pouch",
        imgSrc: "/images/cat-1.jpg",
        href: "/lakshmibhog-1kg-pouch",
        hoverRotate: "-rotate-6",
    },
    {
        id: 4,
        title: "LakshmiBhog 1kg pouch",
        imgSrc: "/images/cat-1.jpg",
        href: "/lakshmibhog-1kg-pouch",
        hoverRotate: "rotate-6",
    },
    {
        id: 5,
        title: "LakshmiBhog 1kg pouch",
        imgSrc: "/images/cat-1.jpg",
        href: "/lakshmibhog-1kg-pouch",
        hoverRotate: "-rotate-6",
    },
];

export default function Category() {
    return (
        <section>
            <h1 className="my-10 text-center text-[#1E3A8A] font-bold text-3xl hover:text-teal-500 transition-colors duration-300">
                Categories
            </h1>
            <div className="max-w-[80vw] mx-auto grid grid-cols-5 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className={`block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60 transition-transform duration-300 hover:${category.hoverRotate}`}
                    >
                        <img
                            src={category.imgSrc}
                            alt={category.title}
                            className="h-40 w-auto rounded-md object-cover"
                        />
                        <div className="mt-2 font-semibold text-base">
                            <h5>{category.title}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
