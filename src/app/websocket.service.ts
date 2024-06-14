// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {
//   private socket: WebSocket;
//   private subject: Subject<MessageEvent>;
//
//   constructor() {
//     this.socket = new WebSocket('wss://7zok4j6es2.execute-api.us-east-1.amazonaws.com/dev/');
//     this.subject = new Subject<MessageEvent>();
//   }
//
//   public connect(url: string): Subject<MessageEvent> {
//     if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
//       this.socket = new WebSocket(url);
//       this.socket.onmessage = (event) => this.subject.next(event);
//       this.socket.onerror = (event) => this.subject.error(event);
//       this.socket.onclose = (event) => this.subject.complete();
//       console.log("Successfully connected: " + url);
//     }
//     return this.subject;
//   }
//
//   public send(data: any) {
//     if (this.socket && this.socket.readyState === WebSocket.OPEN) {
//       this.socket.send(JSON.stringify(data));
//     } else {
//       console.error('WebSocket is not open. Ready state: ' + (this.socket ? this.socket.readyState : 'NO SOCKET'));
//     }
//   }
// }

import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {Subject} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | undefined;
  private subject: Subject<MessageEvent>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.subject = new Subject<MessageEvent>();
  }

  public connect(url: string): Subject<MessageEvent> {
    if (isPlatformBrowser(this.platformId) && (!this.socket || this.socket.readyState !== WebSocket.OPEN)) {
      this.socket = new WebSocket(url);
      this.socket.onmessage = (event) => this.subject.next(event);
      this.socket.onerror = (event) => this.subject.error(event);
      this.socket.onclose = (event) => this.subject.complete();
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  public sendold(data: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not open. Ready state: ' + (this.socket ? this.socket.readyState : 'NO SOCKET'));
    }
  }

  public send(action: string, message: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const data = JSON.stringify({ action, message });
      this.socket.send(data);
    } else {
      console.error('WebSocket is not open. Ready state: ' + (this.socket ? this.socket.readyState : 'NO SOCKET'));
    }
  }
}
