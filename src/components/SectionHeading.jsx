import React from 'react'

const SectionHeading = ({ tagline, title, description }) => {
    const PRIMARY_COLOR = "#0B1F4D";
    return (
        <div className="text-center mb-12">
            {/* <motion.div {...fadeInUp} className="text-center mb-16"> */}

            {/* </motion.div> */}

            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-sky-600">
                <span className="w-5 h-px bg-sky-500" />
                {tagline}
                <span className="w-5 h-px bg-sky-500" />
            </span>

            <h2
                className="text-3xl md:text-4xl lg:text-3xl font-extrabold tracking-tight uppercase my-2"
                style={{ color: PRIMARY_COLOR }}
            >
                {title}
            </h2>

            <p className="text-sm md:text-base lg:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default SectionHeading