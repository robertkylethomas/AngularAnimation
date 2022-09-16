import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';
import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('markedTrigger', [
      state(
        'unmarked',
        style({
          padding: '20px',
          border: '1px solid #000',
        })
      ),
      state(
        'marked',
        style({
          padding: '18px',
          border: '2px solid blue',
          backgroundColor: 'lightblue',
        })
      ),
      transition('unmarked <=> marked', []),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  markedState = 'unmarked';
  constructor(private prjService: ProjectsService) {}

  ngOnInit() {
    this.prjService.loadProjects().subscribe((prj: Project[]) => {
      this.progress = 'finished';
      this.projects = prj;
    });
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }

  setMarked(i: number) {
    console.log(i);
    this.markedState;
  }
}
