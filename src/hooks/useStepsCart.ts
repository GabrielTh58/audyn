import { StepsCartContext } from "@/context/StepsCartContext";
import { useContext } from "react";

export const useStepsCart = () => useContext(StepsCartContext);