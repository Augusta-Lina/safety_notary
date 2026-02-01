"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { EASSCAN_ATTESTATION_URL } from "@/lib/config/eas";

function SuccessContent() {
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-juniper-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-juniper"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-russett mb-4">
            Incident Submitted Successfully!
          </h1>
          <p className="text-lg text-russett-400 mb-2">
            Your AI safety incident has been recorded on-chain.
          </p>
          <p className="text-russett-400">
            The attestation is now permanently stored on the Ethereum Sepolia network.
          </p>
        </div>

        {uid && (
          <div className="bg-cameo-50 border border-napa rounded-lg p-6 mb-8">
            <h2 className="text-sm font-medium text-russett-400 mb-2">
              Attestation UID
            </h2>
            <p className="font-mono text-sm text-russett break-all mb-4">
              {uid}
            </p>
            <a
              href={`${EASSCAN_ATTESTATION_URL}/view/${uid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-juniper hover:text-juniper-700 text-sm font-medium"
            >
              View on EASScan
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={uid ? `/incidents/${uid}` : "/incidents"}
            className="px-6 py-3 bg-juniper text-white rounded-md hover:bg-juniper-700 font-medium"
          >
            View Incident Details
          </Link>
          <Link
            href="/submit"
            className="px-6 py-3 border border-napa text-russett rounded-md hover:bg-cameo-50 font-medium"
          >
            Submit Another Incident
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-napa">
          <h3 className="text-sm font-medium text-russett mb-4">What happens next?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-4 rounded-lg border border-napa">
              <div className="w-8 h-8 bg-geraldine-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-geraldine font-bold text-sm">1</span>
              </div>
              <h4 className="font-medium text-russett mb-1">Review</h4>
              <p className="text-sm text-russett-400">
                Community members can review and verify your incident report.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-napa">
              <div className="w-8 h-8 bg-geraldine-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-geraldine font-bold text-sm">2</span>
              </div>
              <h4 className="font-medium text-russett mb-1">Verification</h4>
              <p className="text-sm text-russett-400">
                Verified incidents gain credibility and visibility in the registry.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-napa">
              <div className="w-8 h-8 bg-geraldine-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-geraldine font-bold text-sm">3</span>
              </div>
              <h4 className="font-medium text-russett mb-1">Mitigation</h4>
              <p className="text-sm text-russett-400">
                Track mitigation status as AI providers address the issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-russett-400">Loading...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
