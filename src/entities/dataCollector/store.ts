import { DataCollector } from "./types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MyState {
  dataCollectors: DataCollector[];
  addDataCollector: (dataCollector: DataCollector) => void;
}

export const useDataCollectorStore = create<MyState>()(
  persist(
    (set, get) => ({
      dataCollectors: [],
      addDataCollector: (dataCollector: DataCollector) =>
        set({ dataCollectors: [...get().dataCollectors, dataCollector] }),
      updateDataCollector: (newDataCollector: DataCollector) =>
        set({
          dataCollectors: get().dataCollectors.map((dataCollector) =>
            dataCollector.id === newDataCollector.id
              ? newDataCollector
              : dataCollector
          ),
        }),
      removeDataCollector: (id: string) =>
        set({
          dataCollectors: get().dataCollectors.filter(
            (dataCollector) => dataCollector.id !== id
          ),
        }),
      cleanDataCollectors: () => set({ dataCollectors: [] }),
    }),
    {
      name: "data-collector-storage", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
      //   partialize: (state) => ({ bears: state.bears }),
    }
  )
);
