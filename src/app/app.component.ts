import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tCapacitorDemo';

  private logDeviceIdInfo: any;
  public logDeviceId: string = '';

  private logDeviceInfo: any;
  public logDevicePlatform: string = '';

  isOrientationPortrait: boolean = true;

  constructor() { }

  ngOnInit() {
    this.logDeviceIdInfo = Device.getId();
    this.logDeviceIdInfo.then(() => {
      console.warn('this.logDeviceIdInfo: ', this.logDeviceIdInfo);
      this.logDeviceId = this.logDeviceIdInfo.__zone_symbol__value.identifier;
      console.warn('this.logDeviceId: ', this.logDeviceId);
    });

    this.logDeviceInfo = Device.getInfo();
    this.logDeviceInfo.then(() => {
      console.warn('this.logDeviceInfo: ', this.logDeviceInfo);
      this.logDevicePlatform = this.logDeviceInfo.__zone_symbol__value.platform;
      console.warn('this.logDevicePlatform: ', this.logDevicePlatform);
    });
  }

  public onToggleOrientation() {
    // alert('onToggleOrientation clicked');
    this.isOrientationPortrait = !this.isOrientationPortrait;
    if (this.isOrientationPortrait) {
      // await ScreenOrientation.lock({ orientation: 'portrait' });
      ScreenOrientation.lock({ orientation: 'portrait' });
    } else {
      // await ScreenOrientation.lock({ orientation: 'landscape' });
      ScreenOrientation.lock({ orientation: 'landscape' });
    }
  }

}