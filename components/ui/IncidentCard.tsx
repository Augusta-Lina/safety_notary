import Link from "next/link";
import { AttestationData } from "@/lib/types";
import { SeverityBadge } from "@/components/ui/SeverityBadge";

interface IncidentCardProps {
  incident: AttestationData;
}

function formatDate(timestamp: bigint): string {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function IncidentCard({ incident }: IncidentCardProps) {
  return (
    <Link href={`/incidents/${incident.uid}`}>
      <div className="bg-white border border-napa rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-juniper-100 text-juniper-700">
                {incident.incidentType}
              </span>
              <SeverityBadge level={incident.severityLevel} />
            </div>
            <h3 className="text-lg font-semibold text-russett mb-1">
              {incident.modelIdentifier}
            </h3>
            <p className="text-russett-400 text-sm line-clamp-2">
              {incident.description}
            </p>
          </div>
        </div>
        <div className="text-xs text-russett-400">
          <span>Reported {formatDate(incident.timestamp)}</span>
        </div>
      </div>
    </Link>
  );
}
