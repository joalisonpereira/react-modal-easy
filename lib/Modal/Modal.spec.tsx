import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal', () => {
  test('should show children', async () => {
    const sut = render(
      <Modal title={String(Math.random())} isVisible={true} onClose={vi.fn()}>
        foo
      </Modal>
    );

    expect(await sut.findByText('foo')).toBeVisible();
  });

  test('should click custom close button', () => {
    const onCloseMock = vi.fn();

    const sut = render(
      <Modal
        isVisible={true}
        onClose={onCloseMock}
        title={<Modal.Title>aosdkad</Modal.Title>}
        closeButton={
          <Modal.Close onClick={onCloseMock} aria-label='Fechar'>
            Fechar
          </Modal.Close>
        }
      >
        foo
      </Modal>
    );

    const closeButton = sut.getByLabelText('Fechar');

    closeButton.click();

    expect(onCloseMock).toBeCalledTimes(1);
  });

  test('should click default close button', () => {
    const onCloseMock = vi.fn();

    const sut = render(
      <Modal
        title={String(Math.random())}
        isVisible={true}
        onClose={onCloseMock}
      >
        foo
      </Modal>
    );

    const closeButton = sut.getByLabelText('Close');

    closeButton.click();

    expect(onCloseMock).toBeCalledTimes(1);
  });
});
