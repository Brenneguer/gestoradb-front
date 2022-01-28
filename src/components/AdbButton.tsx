import React from 'react';
import { Button } from 'react-bootstrap';

type ButtonProps = {
  onClick?: () => void,
  label: string,
}

const defaultProps = {
  onClick: () => null,
};

AdbButton.defaultProps = defaultProps;

export function AdbButton(props: ButtonProps) {
  const { onClick, label } = props;
  return (
    <Button variant="primary" type="submit" onClick={onClick}>{label}</Button>
  );
}
