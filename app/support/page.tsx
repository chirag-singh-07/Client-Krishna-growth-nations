import Link from "next/link"
export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Support Center</h1>
        <p className="text-gray-600 mb-6">We&apos;re here to help with any questions about your course purchase.</p>
        <div className="space-y-3">
          <a
            href="mailto:support@example.com"
            className="block w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Email Support
          </a>
          <Link
            href="/"
            className="block w-full px-4 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
