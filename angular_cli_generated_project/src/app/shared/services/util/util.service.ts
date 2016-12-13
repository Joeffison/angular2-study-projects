import { Injectable } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Injectable()
export class UtilService {
  constructor(
    private titleService: Title
  ) { }

  projectName() {
    return 'M Project';
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(this.projectName() + ' - ' + newTitle);
  }
}
