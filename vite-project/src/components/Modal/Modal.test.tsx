import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { IModal } from '../../models';

const props: IModal = {
  className: 'modal',
  children: <></>,
  onCloseModal: () => {},
  classNameIcon: 'icon',
  isOpen: true,
};

describe('Modal', () => {
  it('render Modal', () => {
    render(<Modal {...props} />);
    expect(screen.getByRole('button'));
  });
});
