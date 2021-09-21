import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class DataService {

    private messageSource = new Subject<number>();

    constructor() { }

    public getMessage(): Observable<number> {
        return this.messageSource.asObservable();
    }

    public setMessage(message: number) {
        return this.messageSource.next(message);
    }

}