import { Component, OnInit , EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() login = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.login.emit(agreed);
    this.didVote = true;
console.log('did vote:', this.didVote);
  }

}
