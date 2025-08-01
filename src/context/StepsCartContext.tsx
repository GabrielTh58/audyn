'use client';

import { createContext, useState, useEffect, ReactNode } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

interface StepsCartContextValue {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const StepsCartContext = createContext<StepsCartContextValue>({} as StepsCartContextValue);

interface StepsCartProviderProps {
  children: ReactNode;
}

export function StepsCartProvider({ children }: StepsCartProviderProps) {
  const { setItem, getItem } = useLocalStorage();
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  useEffect(() => {
      const stored = getItem("step");
      const parsed = Number(stored);
      if (parsed >= 1 && parsed <= 3) {
        setCurrentStep(parsed);
      } else {
        setCurrentStep(1);
      }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && currentStep !== null) {
      setItem("step", currentStep.toString());
    }

    if(currentStep == 3) {
      setItem("step", "1")
    }
  }, [currentStep]);

  const nextStep = () => {
    setCurrentStep((prev) => {
      if (prev === null) return 1;
      return Math.min(prev + 1, 3);
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      if (prev === null) return 1;
      return Math.max(prev - 1, 1);
    });
  };


  if (currentStep === null) {
    return null; 
  }

  return (
    <StepsCartContext.Provider value={{ currentStep, nextStep, prevStep }}>
      {children}
    </StepsCartContext.Provider>
  );
}
