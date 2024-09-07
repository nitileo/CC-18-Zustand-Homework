import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const TodoStore = (set) => ({
  arr: [],
  addArr: (newvalue) =>
    set((state) => ({
      arr: [...state.arr, { id: state.arr.length + 1, title: newvalue }],
    })),
  delArr: (newvalue) =>
    set((state) => ({
      arr: state.arr.filter((el) => el.id !== newvalue),
    })),
  editArr: (id, newTitle) =>
    set((state) => ({
      arr: state.arr.map((el) =>
        el.id == id ? { ...el, title: newTitle } : el
      ),
    })),
});

const usePersist = {
  name: "todo-store",
  getStorage: () => localStorage,
};

const useStore = create(persist(TodoStore, usePersist));

export default useStore;
