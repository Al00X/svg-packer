import iconsSprite from './svg-packed.svg';
import type { IconName } from './svg-packed-names';
import { component$ } from '@builder.io/qwik';

export default component$(
  ({
    name,
    size = '1.5rem',
    ...props
  }: {
    name: IconName;
    size?: string;
    class?: string;
  }) => {
    return (
      <svg {...props} class={`${props.class ?? ''}`} style={{ width: size, height: size }}>
        <use href={`${iconsSprite}#${name}`} />
      </svg>
    );
  },
);
