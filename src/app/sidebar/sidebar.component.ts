import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Output() ShowItems:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  HideItems(){
    this.ShowItems = ! this.ShowItems;
    this.ShowItems = true;
  }

}
