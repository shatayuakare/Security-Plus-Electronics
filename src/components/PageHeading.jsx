import React from 'react'


const PageHeading = ({ tagline, title, description }) => {
    const PRIMARY_COLOR = "#0B1F4D";
    return (
        <div className="text-center mb-12">

            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-sky-600 mb-4">
                <span className="w-5 h-px bg-sky-500" />
                {tagline}
                <span className="w-5 h-px bg-sky-500" />
            </span>

            <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase"
                style={{ color: PRIMARY_COLOR }}
            >
                {title}
            </h1>

            <p className="text-sm md:text-base text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default PageHeading