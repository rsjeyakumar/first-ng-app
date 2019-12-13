import { RootRenderer, Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class InterComponentCommunicationService{
     emitval=new Subject<boolean>(); 

    //  emiteventchanges(item){
    //      this.emitval.emit(item)
    //  }

    //  sendeventchanges(){
    //      return this.emitval;
    //  }

}