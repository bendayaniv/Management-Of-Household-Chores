import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Member } from 'src/app/models/member';
import { TasksService } from 'src/app/services/tasks.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    public tasks: Task[];
    public members: Member[];
    public member: -1;

    constructor(private tasksService: TasksService,
        private membersService: MembersService) { }

    public ngOnInit(): void {

        this.getAllTasks();

        this.membersService.getAllMembers().subscribe(
            members => this.members = members,
            err => alert(err),
            () => console.log("All the members are here"));

    }

    public setSelected(): void {
        this.tasksService.getTasksOfSpecificMember(this.member).subscribe(
            tasks => this.tasks = tasks,
            err => alert(err),
            () => console.log(this.tasks));
    }

    public getAllTasks(): void {
        this.tasksService.getAllTasks().subscribe(
            tasks => this.tasks = tasks,
            err => console.log(err));
    }

    public deleteTask(id: number): void {
        if (window.confirm("Are You Sure You Finish Your Task?") === true) {
            this.tasksService.deleteTask(id).subscribe(
                deletedTask => {
                    alert("Success to delete. ID: " + id);
                    this.getAllTasks();
                },
                err => console.log(err)
            );
        }

    }

}
