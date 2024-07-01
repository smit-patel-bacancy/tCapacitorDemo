import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { TextZoom } from '@capacitor/text-zoom';

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

  private logDeviceZoomInfo: any;
  private logDeviceZoomPreferredInfo: any;

  public logImageDetails: any;
  public imageWebPath: string | undefined = '';
  public imagePath: string | undefined = '';

  isOrientationPortrait: boolean = true;
  isToggleZoom: boolean = false;

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

    if (this.logDevicePlatform !== 'web') {

      this.logDeviceZoomInfo = TextZoom.get();
      this.logDeviceZoomInfo.then(() => {
        console.warn('this.logDeviceZoomInfo: ', this.logDeviceZoomInfo);
        // this.logDevicePlatform = this.logDeviceInfo.__zone_symbol__value.platform;
        // console.warn('this.logDevicePlatform: ', this.logDevicePlatform);
      });

      this.logDeviceZoomPreferredInfo = TextZoom.getPreferred();
      this.logDeviceZoomPreferredInfo.then(() => {
        console.warn('this.logDeviceZoomPreferredInfo: ', this.logDeviceZoomPreferredInfo);
        // this.logDevicePlatform = this.logDeviceInfo.__zone_symbol__value.platform;
        // console.warn('this.logDevicePlatform: ', this.logDevicePlatform);
      });
    }

  }

  public onToggleZoom() {
    this.isToggleZoom = !this.isToggleZoom;
    if (this.isToggleZoom) {
      TextZoom.set({ value: 3 });
    } else {
      TextZoom.set({ value: 1 });
    }
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


  public takePicture = async () => {
    // both select from album and camera
    // this.logImageDetails = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: true,
    //   resultType: CameraResultType.Uri
    //   // resultType: CameraResultType.Base64
    // });

    // only camera
    this.logImageDetails = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    console.warn('this.logImageDetails: ', this.logImageDetails);
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imageWebPath = this.logImageDetails.webPath;
    this.imagePath = this.logImageDetails.path;
    console.log('this.imagePath: ', this.imagePath);

    // console.warn('this.logImageDetails.webPath?.includes(\'blob:\'): ', this.logImageDetails.webPath?.includes('blob:'));
    // if (this.logImageDetails.webPath?.includes('blob:')) {
    //   this.imageWebPath = this.logImageDetails.webPath?.substring(5);
    // }

    // Can be set to the src of an image now
    // imageElement.src = imageWebPath;
  };

}