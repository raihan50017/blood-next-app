import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-white p-6">
      {/* Hero Section */}
      <header className="text-center space-y-6 max-w-2xl">
        <Image src="/blood-drop.svg" alt="Blood Drop" width={100} height={100} />
        <h1 className="text-5xl font-extrabold text-red-700 leading-tight">
          Donate Blood, Save Lives
        </h1>
        <p className="text-lg text-gray-700">
          Join our network of life-saving donors. Every drop counts.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg">
            Register Now
          </Button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full max-w-4xl">
        <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-4xl font-bold text-red-600">1,500+</h2>
          <p className="text-gray-700 text-lg">Registered Donors</p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-4xl font-bold text-red-600">10,000+</h2>
          <p className="text-gray-700 text-lg">Successful Donations</p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-4xl font-bold text-red-600">100+</h2>
          <p className="text-gray-700 text-lg">Cities Covered</p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="mt-20 text-center max-w-3xl">
        <h3 className="text-3xl font-semibold text-gray-800">
          Be a Hero Today!
        </h3>
        <p className="text-lg text-gray-700 mt-3">
          Sign up now and help save lives by donating blood to those in need.
        </p>
        <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg">
          Get Started
        </Button>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-600 w-full border-t border-gray-200 py-6">
        <p>
          Contact us: <a href="mailto:support@blooddonor.com" className="text-red-600 font-medium">support@blooddonor.com</a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Blood Donor Management. All rights reserved.</p>
      </footer>
    </div>
  );
}