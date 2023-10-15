import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { CloseIcon } from "./CloseIcon";

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ isVisible, children, onClose }: ModalProps) {
  return (
    <Dialog.Root open={isVisible}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content onEscapeKeyDown={onClose} className={styles.content}>
          {children}
          <Dialog.Close asChild>
            <button
              onClick={onClose}
              className={styles.closeBtn}
              aria-label="Fechar"
            >
              <CloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Title = Dialog.Title;

Modal.Description = Dialog.Description;

Modal.Close = Dialog.Close;
