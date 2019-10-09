import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.services';
import { sideMenu } from 'src/app/app.menu';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidenavComponent implements OnInit {

  public panelOpenState: boolean = false;

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  public sideMenu: any;
  constructor(public utils: UtilsService) {
    this.sideMenu = sideMenu
  }

  ngOnInit() {
  }

}
