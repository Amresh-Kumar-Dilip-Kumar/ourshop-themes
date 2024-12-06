import React from 'react'

export default function Category() {
    return (
        <section >
            <h1 className='my-10 text-center text-[#1E3A8A] font-bold text-3xl hover:text-teal-500 transition-colors duration-300'>Categories</h1>
            <div className='max-w-[80vw] mx-auto grid grid-cols-5'>
                <a href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60  transition-transform duration-300 hover:-rotate-6 "
                >
                    <img
                        src="/images/cat-1.jpg"
                        alt=""
                        className="h-40 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2 font-semibold text-base">
                        <h5>LakshmiBhog 1kg pouch</h5>
                    </div>
                </a>

                <a href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60  transition-transform duration-300 hover:rotate-6 "
                >
                    <img
                        src="/images/cat-1.jpg"
                        alt=""
                        className="h-40 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2 font-semibold text-base">
                        <h5>LakshmiBhog 1kg pouch</h5>
                    </div>
                </a>

                <a href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60  transition-transform duration-300 hover:-rotate-6 "
                >
                    <img
                        src="/images/cat-1.jpg"
                        alt=""
                        className="h-40 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2 font-semibold text-base">
                        <h5>LakshmiBhog 1kg pouch</h5>
                    </div>
                </a>

                <a href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60  transition-transform duration-300 hover:rotate-6 "
                >
                    <img
                        src="/images/cat-1.jpg"
                        alt=""
                        className="h-40 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2 font-semibold text-base">
                        <h5>LakshmiBhog 1kg pouch</h5>
                    </div>
                </a>

                <a href="#" className="block rounded-lg p-4 shadow-xl shadow-indigo-100 h-56 w-60  transition-transform duration-300 hover:-rotate-6"
                >
                    <img
                        src="/images/cat-1.jpg"
                        alt=""
                        className="h-40 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2 font-semibold text-base">
                        <h5>LakshmiBhog 1kg pouch</h5>
                    </div>
                </a>

            </div>

        </section>
    )
}
