import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow py-4 px-6">
            <Link href="/" className="text-2xl font-bold text-gray-800">Real Estate</Link>
        </header>
    );
}