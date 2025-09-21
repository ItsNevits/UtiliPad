import { atom } from "nanostores";

export interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
  content: any;
  onCopy?: () => void;
}

export const modalStore = atom<ModalState>({
  isOpen: false,
  title: "",
  description: "",
  content: null,
  onCopy: undefined,
});

// Funciones helpers
export function openModal(config: Omit<ModalState, "isOpen">) {
  modalStore.set({
    ...config,
    isOpen: true,
  });
}

export function closeModal() {
  modalStore.set({
    isOpen: false,
    title: "",
    description: "",
    content: null,
    onCopy: undefined,
  });
}
