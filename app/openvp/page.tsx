
import Link from 'next/link';

export default function OpenVPPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            OpenVPN Configuration Files
          </h1>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Configuration Files
              </h2>
              
              <div className="space-y-4">
                <div>
                  <a 
                    href="/pass/SpDSWoGZfv6Besit2R32KRjb.txt" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                    download
                  >
                    Download SpDSWoGZfv6Besit2R32KRjb.txt
                  </a>
                </div>
                
                <div>
                  <a 
                    href="/pass/kCVvkPuZXCcyPo7FakbM2JTe.txt" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                    download
                  >
                    Download kCVvkPuZXCcyPo7FakbM2JTe.txt
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                File Names (Plain Text)
              </h2>
              
              <div className="bg-gray-100 p-4 rounded font-mono text-sm space-y-2">
                <div>SpDSWoGZfv6Besit2R32KRjb</div>
                <div>kCVvkPuZXCcyPo7FakbM2JTe</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
