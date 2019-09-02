import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  public Success(name: string) {
    toastr.success(name);
  }

}
