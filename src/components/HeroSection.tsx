'use client'; // Add this line at the very top of your file

import { useState } from 'react';

interface Slide {
    imgSrc: string;
    imgAlt: string;
}

const Carousel: React.FC = () => {
    const slides: Slide[] = [
        {
            imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-1.webp',
            imgAlt: 'Vibrant abstract painting with swirling blue and light pink hues on a canvas.',
        },
        {
            imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-2.webp',
            imgAlt: 'Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.',
        },
        {
            imgSrc: 'https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-3.webp',
            imgAlt: 'Vibrant abstract painting with swirling blue and purple hues on a canvas.',
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);

    const previous = () => {
        setCurrentSlideIndex((prev) => (prev > 1 ? prev - 1 : slides.length));
    };

    const next = () => {
        setCurrentSlideIndex((prev) => (prev < slides.length ? prev + 1 : 1));
    };

    return (
        <div className="relative w-full  h-[600px] overflow-hidden">
            {/* previous button */}
            <button
                type="button"
                className="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
                aria-label="previous slide"
                onClick={previous}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="3"
                    className="size-5 md:size-6 pr-0.5"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* next button */}
            <button
                type="button"
                className="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
                aria-label="next slide"
                onClick={next}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="3"
                    className="size-5 md:size-6 pl-0.5"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* slides */}
            <div className="relative min-h-[600px] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlideIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            className="absolute w-full h-full inset-0 object-cover text-neutral-600 dark:text-neutral-300"
                            src={slide.imgSrc}
                            alt={slide.imgAlt}
                        />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Carousel;
