import { variants, white, gray } from '@components/Core/style';

const sizes = {
  sm: {
    fontSize: '.75rem',
    padding: '.25rem .5rem',
    borderRadius: '.25rem',
  },
  md: {
    fontSize: '.875rem',
    padding: '.625rem 1.25rem',
    borderRadius: '.25rem',
  },
  lg: {
    fontSize: '.875rem',
    padding: '.875rem 1rem',
    borderRadius: '.4375rem',
  },
};

const fontColor = (color) => {
  if (color === 'neutral') {
    return gray[900];
  }

  return white;
};

export const btn = (color, size, block, outline) => `
  background-color: ${outline ? 'transparent' : variants[color]};
  border-radius: ${sizes[size]?.borderRadius};
  border: 1px solid ${
  outline && color === 'neutral' ? gray[300] : variants[color]
};
  box-shadow: ${
  outline
    ? 'none'
    : '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)'
};
  color: ${outline && color !== 'neutral' ? variants[color] : fontColor(color)};
  display: ${block ? 'inline-block' : 'block'};
  font-size: ${sizes[size]?.fontSize};
  font-weight: 500;
  letter-spacing: .025em;
  padding: ${sizes[size]?.padding};
  positon: relative;
  transition: .15s ease;
  text-transform: none;
  will-change: transform;
  width: ${block ? '100%' : 'auto'};

  &:hover {
    transform: ${outline ? 'none' : 'translateY(-1px)'};
    box-shadow: ${
  outline
    ? 'none'
    : '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)'
};
    background-color: ${variants[color]};
    color: ${fontColor(color)};
  }
`;
