import { Helmet } from "react-helmet-async";

// const SITE_URL = "https://cctvmall.netlify.app";
const SITE_URL = "http://localhost:5173";

export default function SEO({
    title,
    description,
    path = "/",
}) {
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <link
                rel="canonical"
                href={canonicalUrl}
            />
        </Helmet>
    );
}