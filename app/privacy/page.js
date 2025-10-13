// --- PrivacyPolicyPage.jsx ---
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400 border-b pb-4 border-indigo-200 dark:border-indigo-900/50">
          Privacy Policy
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          At <strong className="font-extrabold">NYDev</strong>, your privacy is paramount. This policy details how we collect,
          use, and safeguard your personal information as you interact with our platform and services.
        </p>

        {/* Policy Sections */}
        <section className="space-y-10 text-lg text-gray-800 dark:text-gray-200">
          
          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We primarily collect personal information you willingly provide, such as your name, email address,
              and any details submitted via enrollment or contact forms. Additionally, we log limited technical
              information, including **IP address**, **device type**, and **browser specifics** for security and analytics purposes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              Collected data is used strictly to **deliver our contracted services**, send crucial updates,
              continually enhance user experience and website functionality, and securely process payments initiated by you.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">3. Data Security Measures</h2>
            <p className="leading-relaxed">
              We employ **industry-standard encryption** and security protocols to protect your information from unauthorized
              access, accidental loss, alteration, or public disclosure. Data protection is a top priority across our infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">4. Your Data Rights</h2>
            <p className="leading-relaxed">
              You maintain the right to access, rectify, or request the deletion of your personal data at any point.
              Please direct all data inquiries to our dedicated support email:{" "}
              <a href="mailto:support@nydev.tech" className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700 transition font-medium">support@nydev.tech</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}