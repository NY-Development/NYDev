// --- TermsPage.jsx ---
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400 border-b pb-4 border-indigo-200 dark:border-indigo-900/50">
          Terms of Service
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Welcome to <strong className="font-extrabold">NYDev</strong>. By accessing or using our website and services, you
          confirm your binding agreement to these Terms. We advise you to review them thoroughly before proceeding.
        </p>

        {/* Terms Sections */}
        <section className="space-y-10 text-lg text-gray-800 dark:text-gray-200">
          
          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By using the NYDev platform, you represent and warrant that you possess the **legal capacity** to enter into these terms
              and to form a binding contract under all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">2. Proper Use of Services</h2>
            <p className="leading-relaxed">
              You covenant and agree **not to exploit, modify, distribute, or misuse** our platform. Any activity that disrupts, degrades,
              or compromises the functionality or security of our systems is strictly prohibited and may result in service termination.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All proprietary content, original designs, coding architecture, and software assets provided by NYDev are the **exclusive
              property** of NYDev and are rigorously protected by international copyright and intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              NYDev will **not be liable** for any indirect, incidental, punitive, or consequential damages resulting from your
              access to or inability to use the services, even if NYDev was advised of the possibility of such damages.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}