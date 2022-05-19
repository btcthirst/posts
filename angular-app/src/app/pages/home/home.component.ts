import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/shared/services/fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  helloString: string = "";

  constructor(private fakeService: FakeService) { }

  ngOnInit(): void {
    this.getHelloString()
  }
  getHelloString() {
    this.helloString = this.fakeService.getData()
  }

}
