import create from 'zustand'

type StoreProps = {
  selected: string[]
  addCategory: (arg: string) => void
  removeCategory: (arg: string) => void
  clearSelected: () => void
}

export const useSelectedCategories = create<StoreProps>(set => ({
  selected: [],
  addCategory: (category: string) =>
    set((state: any) => {
      if (state.selected.length < 3) {
        return {
          selected: [...state.selected, category],
        }
      } else {
        return state.selected
      }
    }),
  removeCategory: (category: string) =>
    set(state => {
      return {
        selected: state.selected.filter(
          (exisingCategory: string) => exisingCategory !== category
        ),
      }
    }),
  clearSelected: () => set({ selected: [] }),
}))
