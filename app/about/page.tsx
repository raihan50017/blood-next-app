import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="min-h-screen px-6 py-12 sm:px-16 lg:px-32 text-gray-800">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-600">
                    Connecting donors with those in need—saving lives one drop at a time.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
                <Image src="/blood-drop.svg" width={300} height={300} alt="Blood Drop" />
                <div className="max-w-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 text-lg">
                        Our goal is to ensure no patient suffers due to a lack of blood. We
                        connect voluntary donors with those in urgent need, making blood
                        donation easy, safe, and accessible.
                    </p>
                </div>
            </div>

            {/* Why Donate? Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Donate Blood?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-red-600">Save Lives</h3>
                        <p className="text-gray-600 mt-2">
                            One donation can save up to three lives.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-red-600">Improve Health</h3>
                        <p className="text-gray-600 mt-2">
                            Regular donation improves heart health and reduces iron overload.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-red-600">Community Impact</h3>
                        <p className="text-gray-600 mt-2">
                            Strengthen the community by being a responsible donor.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Join Our Mission</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                    Become a donor today and be a hero. Your small act can make a big
                    difference.
                </p>
                <a
                    href="/register"
                    className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-red-700 transition"
                >
                    Register Now
                </a>
            </div>
        </div>
    );
};

export default About;