import create from 'zustand';

const useStore = create((set) => ({
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ],
  incrementCounter: (id) => set((state) => ({
    counters: state.counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    )
  })),
  decrementCounter: (id) => set((state) => ({
    counters: state.counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    )
  })),
  getTotal: () => set((state) => ({
    total: state.counters.reduce((total, counter) => total + counter.value, 0)
  }))
}));

export default useStore;
