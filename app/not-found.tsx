import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-25 text-center p-4">
            <h2 className="text-8xl font-black font-ibm-plex-serif text-black mb-4">404</h2>
            <p className="text-2xl font-semibold text-black-1 font-inter mb-2">Page Not Found</p>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-[#000000] text-white font-semibold shadow-form hover:bg-blue-700 transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}
