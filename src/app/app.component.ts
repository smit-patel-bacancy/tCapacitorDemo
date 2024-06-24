import { Component } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tCapacitorDemo';
  logDeviceInfo: any;
  logDeviceId: any;

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo = Device.getId();
    console.warn('this.logDeviceInfo: ', this.logDeviceInfo);
    this.logDeviceInfo.then(() => {
      this.logDeviceId = this.logDeviceInfo.__zone_symbol__value.identifier;
      console.warn('this.logDeviceId: ', this.logDeviceId);
    });
  }

}