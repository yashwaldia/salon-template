"use client";
import PageHeader from "../components/layout/PageHeader";

export default function Legal({ title }: { title: string }) {
  return (
    <div className="bg-sand-50 min-h-screen pb-32">
      <PageHeader title={title} />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12 mt-24">
        <div className="prose prose-sand prose-lg mx-auto font-light text-sand-800 leading-relaxed">
          <p>
            This page contains the legal information for [Salon Name]. As this is a premium template demonstration, the comprehensive legal texts for {title} would be inserted here by the final business owner in accordance with local regulations (such as GDPR and regional laws).
          </p>
          <h3 className="font-serif text-2xl mt-12 mb-4 text-sand-900">1. Information Collection</h3>
          <p>
            We prioritize your privacy and handle all personal data with the utmost discretion and security. Our procedures are fully compliant with European data protection standards.
          </p>
          <h3 className="font-serif text-2xl mt-12 mb-4 text-sand-900">2. Liability</h3>
          <p>
            The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.
          </p>
        </div>
      </div>
    </div>
  );
}
