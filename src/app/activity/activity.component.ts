import { Component, OnInit } from '@angular/core';
import { Activity, ActivityService } from '../services/activity.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [NgIf],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})

export class ActivityComponent implements OnInit {
  activity?: Activity;
  loading: boolean = false;
  error?: string;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    
  }

  loadActivity(): void {
    this.loading = true;
    this.error = undefined;

    this.activityService.getActivity().subscribe({
      next: (data) => {
        this.activity = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load activity.';
        this.loading = false;
      }
    });
  }
}
