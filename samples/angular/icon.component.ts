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
