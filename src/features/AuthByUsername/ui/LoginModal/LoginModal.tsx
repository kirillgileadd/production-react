import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LonginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      className={classNames('', {}, [className])}
      onClose={onClose}
      isOpen={isOpen}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
