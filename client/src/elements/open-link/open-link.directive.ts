import { Directive, input } from '@angular/core';

@Directive({
  selector: '[cpjeOpenLink]',
  host: {
    '(click)': 'openLink()',
  },
})
export class OpenLinkDirective {
  readonly link = input.required<string>({
    alias: 'cpjeOpenLink',
  });

  protected openLink() {
    window.open(this.link(), '_blank');
  }
}
