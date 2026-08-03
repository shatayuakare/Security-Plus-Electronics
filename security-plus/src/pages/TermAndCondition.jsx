import React from "react";
import {
    ShieldCheck,
    FileText,
    ShoppingBag,
    CreditCard,
    Truck,
    RotateCcw,
    AlertTriangle,
    Scale,
    Phone,
    Mail,
    Globe,
    Building2,
    ChevronRight,
} from "lucide-react";

const sections = [
    {
        icon: ShoppingBag,
        title: "Products & Services",
        content:
            "Security Plus Electronics (CCTV Mall) supplies CCTV cameras, surveillance systems, networking products, computer accessories, security solutions, and related electronic equipment. Product availability, pricing, and specifications are subject to change without prior notice.",
    },
    {
        icon: CreditCard,
        title: "Pricing & Payments",
        content:
            "All prices displayed are in Indian Rupees (INR). Taxes, GST, shipping charges, and installation costs may be applicable separately unless specifically mentioned. Orders are processed only after successful payment confirmation.",
    },
    {
        icon: Truck,
        title: "Delivery & Installation",
        content:
            "Delivery timelines depend on product availability and service location. Installation services are available only in selected regions and may incur additional charges. Customers must ensure access to the installation site.",
    },
    {
        icon: RotateCcw,
        title: "Returns & Warranty",
        content:
            "Products eligible for replacement or warranty must comply with the manufacturer's warranty terms. Physical damage, improper installation, misuse, or unauthorized repairs are not covered. Returns are accepted only for eligible products under applicable policies.",
    },
    {
        icon: AlertTriangle,
        title: "Limitation of Liability",
        content:
            "Security Plus Electronics shall not be liable for indirect, incidental, consequential, or business losses arising from the use or inability to use our products or services. Customers are responsible for maintaining backups and appropriate security measures.",
    },
    {
        icon: ShieldCheck,
        title: "Privacy & Data",
        content:
            "Customer information is collected only for order processing, customer support, and service improvement. Personal information is handled responsibly and is not sold to third parties except where required by law or necessary to fulfill services.",
    },
    {
        icon: Scale,
        title: "Applicable Law",
        content:
            "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Nagpur, Maharashtra.",
    },
];

const TermsAndConditions = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-r from-sky-800 via-sky-600 to-sky-950 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-white/10 rounded-xl backdrop-blur">
                            <FileText size={40} />
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Terms & Conditions
                            </h1>

                            <p className="mt-3 text-red-100">
                                Security Plus Electronics (CCTV Mall)
                            </p>
                        </div>
                    </div>

                    <p className="max-w-3xl text-red-100 leading-8">
                        By accessing our website, purchasing products, or using our
                        services, you agree to comply with the following Terms &
                        Conditions. Please read them carefully before placing an order.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
                    <div className="flex items-center gap-3 mb-5">
                        <Building2 className="text-sky-600" size={30} />

                        <h2 className="text-2xl font-bold text-gray-800">
                            Welcome to Security Plus Electronics
                        </h2>
                    </div>

                    <p className="text-gray-600 leading-8">
                        Security Plus Electronics (CCTV Mall) is one of Central India's
                        leading suppliers of CCTV surveillance systems, networking
                        solutions, security products, computer accessories, and enterprise
                        technology solutions. By using this website or purchasing products
                        from us, you acknowledge that you have read, understood, and agreed
                        to these Terms & Conditions.
                    </p>
                </div>

                {/* Terms */}

                <div className="grid gap-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="bg-sky-100 p-3 rounded-xl">
                                            <Icon className="text-sky-600" size={28} />
                                        </div>

                                        <h2 className="text-2xl font-semibold text-gray-800">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="flex">
                                        <ChevronRight
                                            className="text-sky-600 mt-1 mr-3 flex-shrink-0"
                                            size={18}
                                        />

                                        <p className="text-gray-600 leading-8">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Customer Responsibilities
                    </h2>

                    <ul className="space-y-4">
                        {[
                            "Provide accurate billing, shipping, and contact information.",
                            "Use purchased products according to manufacturer guidelines.",
                            "Protect login credentials and account information.",
                            "Comply with all applicable laws while using surveillance equipment.",
                            "Obtain necessary permissions before recording individuals or private property.",
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600"
                            >
                                <ShieldCheck
                                    className="text-green-600 mt-1 flex-shrink-0"
                                    size={18}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="mt-12 bg-gradient-to-r from-sky-700 to-sky-950 rounded-3xl text-white p-10">
                    <h2 className="text-3xl font-bold mb-6">
                        Contact Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <Building2 size={20} />
                                <span>
                                    Security Plus Electronics (CCTV Mall)
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span>+91 93734 56746</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span>info@securityplus.in</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Globe size={20} />
                                <span>www.securityplus.in</span>
                            </div>

                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">
                                Registered Office
                            </h3>

                            <p className="text-red-100 leading-7">
                                Security Plus Electronics (CCTV Mall)
                                <br />
                                Sitabuldi Main Road
                                <br />
                                Nagpur, Maharashtra - 440012
                                <br />
                                India
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditions;