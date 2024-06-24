import { Component } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tCapacitorDemo';
  logDeviceInfo: any;
  logDeviceId: any;
  isOrientationPortrait: boolean = true;

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo = Device.getId();
    console.warn('this.logDeviceInfo: ', this.logDeviceInfo);
    this.logDeviceInfo.then(() => {
      this.logDeviceId = this.logDeviceInfo.__zone_symbol__value.identifier;
      console.warn('this.logDeviceId: ', this.logDeviceId);
    });
  }

  public onToggleOrientation() {
    alert('onToggleOrientation clicked');
    this.isOrientationPortrait = !this.isOrientationPortrait;
    if (this.isOrientationPortrait) {
      // await ScreenOrientation.lock({ orientation: 'landscape' });
      ScreenOrientation.lock({ orientation: 'landscape' });
    } else {
      // await ScreenOrientation.lock({ orientation: 'portrait' });
      ScreenOrientation.lock({ orientation: 'portrait' });
    }
  }

}