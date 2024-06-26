import { DataCollector } from "./model";

export const fetchCollectors: Promise<DataCollector> = async () => {
  const response = await fetch("/api/collectors");
  return await response.json();
};
