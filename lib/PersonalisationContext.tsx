"use client";

import { createContext, useContext, useMemo, useState } from "react";

type PassengerMode = "arriving" | "departing" | "exploring";

type PersonalisationValue = {
  mode: PassengerMode;
  setMode: (mode: PassengerMode) => void;
  greeting: string;
};

const PersonalisationContext = createContext<PersonalisationValue | null>(null);

export function PersonalisationProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PassengerMode>("departing");
  const greeting = useMemo(() => {
    if (mode === "arriving") {
      return "Welcome to the island. Your arrivals essentials are ready.";
    }

    if (mode === "exploring") {
      return "Explore nearby dining, retail, and island experiences before you travel.";
    }

    return "Good journey. Your departures experience is ready.";
  }, [mode]);

  return (
    <PersonalisationContext.Provider value={{ mode, setMode, greeting }}>
      {children}
    </PersonalisationContext.Provider>
  );
}

export function usePersonalisation() {
  const value = useContext(PersonalisationContext);

  if (!value) {
    throw new Error("usePersonalisation must be used inside PersonalisationProvider");
  }

  return value;
}
