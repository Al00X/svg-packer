# @Al00X/SVG-Packer
> 🗃️ _Pack all of your svg files into a single SVG file! (command-line tool)_

___

## So What's The Point Of This? 🧐❔

Basically, the problem came up when we wanted to use svg icons in an SSR website, and cache them; well
we could have used a caching service and logics to handle things but that would take a lot of time
to write a decent code; 
which consist of handling multiple requests or nasty race conditions that occurred.

Or in React (and other frameworks using jsx) we tend to generate a jsx file for each svg and customize them.

What if we want to add a `size` property to all the icons to controls the width and height simultaneously.
or when we want to add a `disabled` and `onClick` event handlers.

___

## The Solution Is Here! ✨

using this package you can combine all of your svg files into a singular file, 
each icon is inside a symbol, which then can be used by its id, 
and is accessed easily from anywhere with **_Benefits_**:

- Just **one** fetch request to get all the icons
- It's **cached** on the browser
- A **single** component to rule all the svg properties
- **Type safe!** icon names are saved into a d.ts file
- washes the dishes for you
- it's nice... really.

___

## Getting Started 🚀

Install it using your preferred package manager:

```shell
npm i @al00x/svg-packer
```

Now you can call it from your terminal:

```shell
npx svg-packer
```

gather some SVGs and you are ready to go!

___

## How To Use It? 🔦

The simplest way to generate the *Packed SVG* is to give an input & output to start the process:

```shell
npx svg-packer -i ./folder/to/svg/icons -o ./folder/to/output
```

After running this command you will get two files in the output:

- `Packed-SVG.svg` contains all the svgs you pointed to.
- `Packed-SVG-types.d.ts` contains all the icon names for type safety (extracted from the icons filename).

You are all set to use these files in way you like;
The samples below are made for each framework to gives you a quick start!

## Samples 📔

___

### Angular
```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconNameType } from './svg-packed-names';

@Component({
  selector: 'icon',
  template: `
    <div
      class="icon-wrapper"
    >
      <svg style="fill: currentColor !important; color: inherit" [style.width]="size" [style.height]="size">
        <use [attr.href]="'/assets/svg-packed.svg#' + name" />
      </svg>
    </div>
  `,
  styles: ``,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) name!: IconNameType;
  @Input() size?: string = '1.5rem';
}
```

___

### Qwik
```typescript
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
```

___

#### Issues & Contributes are welcomed! 💞
If you find a bug, got a fix, have an idea, made a new feature, or ... 
feel free to send it right away!
