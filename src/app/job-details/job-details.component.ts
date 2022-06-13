import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from "../models/job";
import { UserService } from 'src/app/_services/user.service';
import {AdminService} from "../admin/admin.service";
import {JobServiceService} from "./job-service.service";
import {User} from "../models/user";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input()
  visible: boolean = false;
  @Input()
  job: Job;
  user: User;
  @Output()
  popupClosed = new EventEmitter();

  constructor(
    public userService: UserService,
    private deleteJobService: JobServiceService,
    private applyJobService: JobServiceService
  ) {}

  ngOnInit(): void {
  }

  closePopup() {
    this.popupClosed.emit();
  }

  apply() {
    this.applyJobService.applyJob(this.job.id).subscribe();
  }

  delete() {
    console.log(this.job.id);
    this.deleteJobService.deleteJob(this.job.id).subscribe();
  }

}
