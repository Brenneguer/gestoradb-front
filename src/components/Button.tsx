import React from 'react';

type ButtonProps = {
  onClick?: () => void,
  label: string,
}

const defaultProps = {
  onClick: () => null,
};

Button.defaultProps = defaultProps;

export function Button(props: ButtonProps) {
  const { onClick, label } = props;
  return (
    <button type="submit" onClick={onClick}>{label}</button>
  );
}
