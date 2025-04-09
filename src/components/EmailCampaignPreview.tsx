
import React from "react";
import { Mail } from "lucide-react";

const EmailCampaignPreview = () => {
  return (
    <>
      <img 
        src="/placeholder.svg" 
        alt="Email marketing dashboard with analytics, campaign templates and audience insights"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-mailblast-primary to-mailblast-secondary opacity-70 rounded-lg"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-mailblast-primary rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-mailblast-secondary">Weekly Newsletter</h3>
            </div>
          </div>
          <div className="h-10 w-full bg-gray-100 rounded-lg flex items-center px-3 mb-4">
            <span className="text-gray-400">subject: Your April Marketing Tips</span>
          </div>
          <EmailPreviewContent />
          <div className="h-24 w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center border border-gray-100">
            <span className="text-sm text-gray-400">Email content preview</span>
          </div>
          <button className="h-10 w-full bg-mailblast-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Send Campaign</span>
          </button>
          <div className="mt-4 text-xs text-center text-gray-400">Scheduled for Thursday at 10:00 AM</div>
        </div>
      </div>
    </>
  );
};

// Separate component for the preview content
const EmailPreviewContent = () => {
  return (
    <div className="space-y-2 mb-4">
      <div className="h-3 w-full bg-gray-100 rounded"></div>
      <div className="h-3 w-full bg-gray-100 rounded"></div>
      <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
    </div>
  );
};

export default EmailCampaignPreview;
