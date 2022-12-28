import { MutableRefObject } from 'react';

export function resizable(
  el: MutableRefObject<HTMLInputElement | null>,
  factor: number
) {
  const int = Number(factor) || 7.7;

  const resize = () => {
    if (el.current && el.current.value)
      el.current.style.width = (el.current.value.length + 16) * int + 'px';

    if (el.current?.value.length === 0) el.current.style.width = '0px';
  };

  const e = 'keyup,keypress,focus,blur,change'.split(',');

  if (el.current)
    for (let i in e) el.current.addEventListener(e[i], resize, false);

  resize();
}
