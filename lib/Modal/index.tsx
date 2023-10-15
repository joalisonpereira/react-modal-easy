import * as Dialog from '@radix-ui/react-dialog';
import styles from './Modal.module.css';

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  closeButton?: React.ReactNode | null;
  animation?: 'scale' | 'translate' | 'none';
}

export function Modal({
  isVisible,
  children,
  onClose,
  closeButton,
  animation = 'scale'
}: ModalProps) {
  const animationClass = {
    scale: styles.animationScale,
    translate: styles.translateAnimation,
    none: ''
  }[animation];

  return (
    <Dialog.Root open={isVisible}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          onInteractOutside={onClose}
          onEscapeKeyDown={onClose}
          className={`${styles.content} ${animationClass}`}
        >
          {children}
          {closeButton !== undefined ? (
            closeButton
          ) : (
            <Dialog.Close
              onClick={onClose}
              className={styles.close}
              aria-label='Close'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                width='18px'
                height='18px'
                fill='#444'
              >
                <path d='M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z' />
              </svg>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Close = Dialog.Close;

Modal.Title = Dialog.Title;

Modal.Description = Dialog.Description;
