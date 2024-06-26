import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconNameType } from './name';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'icon',
  template: `
    <div
      class="icon-wrapper"
    >
      <svg style="fill: currentColor !important; color: inherit" [style.width]="size" [style.height]="size">
        <use [attr.href]="'/assets/icons/sprite.svg#' + name" />
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
