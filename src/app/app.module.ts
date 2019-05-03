import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FormsModule } from '@angular/forms';

const config = {
  apiKey: "AIzaSyBRBFk63rXkNiH-Kh8XS5rWaqtylmYkEpg",
  authDomain: "nativetest-1f1a1.firebaseapp.com",
  databaseURL: "https://nativetest-1f1a1.firebaseio.com",
  projectId: "nativetest-1f1a1",
  storageBucket: "nativetest-1f1a1.appspot.com",
  messagingSenderId: "202588731221"
};

@NgModule({
  declarations: [AppComponent,ScannerComponent,RegisterComponent,LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    BarcodeScanner,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
