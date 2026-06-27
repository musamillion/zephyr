"use client";

import Link from "next/link";
import { useState } from "react";
import { conciergeFlows } from "@/lib/concierge-flows";

type FlowKey = keyof typeof conciergeFlows;

export function ConciergeWidget() {
  const [flowKey, setFlowKey] = useState<FlowKey>("start");
  const flow = conciergeFlows[flowKey];

  return (
    <aside className="concierge" aria-label="AER Concierge">
      <div className="concierge-header">
        <span>AER Concierge</span>
        <strong>How can I help you today?</strong>
      </div>
      <p>{flow.message}</p>
      <div className="concierge-options">
        {flow.options.map((option) =>
          option.href ? (
            <Link key={option.label} href={option.href}>
              {option.label}
            </Link>
          ) : (
            <button
              key={option.label}
              type="button"
              onClick={() => setFlowKey(option.next ?? "start")}
            >
              {option.label}
            </button>
          )
        )}
      </div>
    </aside>
  );
}
