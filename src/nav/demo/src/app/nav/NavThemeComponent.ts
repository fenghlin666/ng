import { Component } from '@angular/core';
import { TiNavMenuItem } from '@opentiny/ng';

@Component({
  templateUrl: './nav-theme.html'
})
export class NavThemeComponent {
  items: TiNavMenuItem[] = [
    { id: '1', label: '首页' },
    { id: '2', label: '文档' },
    { id: '3', label: '组件' },
    { id: '4', label: '关于' }
  ];
}
