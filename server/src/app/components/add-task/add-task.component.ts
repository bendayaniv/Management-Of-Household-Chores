import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Task } from 'src/app/models/task';
import { MembersService } from 'src/app/services/members.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    public members: Member[];
    public task = new Task();
    public currentDate: Date;

  constructor(private membersService: MembersService,
    private tasksService: TasksService,
    private router: Router) { }

  public ngOnInit(): void {

    this.membersService.getAllMembers().subscribe(
        members => this.members = members,
        err => console.log(err));

    this.currentDate = new Date();

  }

  public addTask(): void {
      this.tasksService.addTask(this.task).subscribe(
          addedTask => {
              alert("Task has been successfully added. ID: " + addedTask.todoID);
              this.router.navigate(["/tasks"]);
          },
          err => console.log(err));
  }

}
