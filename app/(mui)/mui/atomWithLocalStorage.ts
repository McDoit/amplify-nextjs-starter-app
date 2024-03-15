import { atom, Atom } from "jotai";

export function atomWithLocalStorage<T>(key: string, initialValue: T): Atom<T> {
  function getInitialValue() {
    if (typeof window !== 'undefined') {
    const item = localStorage?.getItem(key);
    if (item !== null) {
      return JSON.parse(item) as T;
    }
  }
    return initialValue as T;
  }
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
}