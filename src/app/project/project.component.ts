import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../projects/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onUpdateStatus(newStatus: string) {
    this.statusUpdated.emit(newStatus);
  }

  onDelete() {
    this.projectDeleted.emit();
  }

  setStatus(status: string) {
    return 'badge ' + status;
  }
}
