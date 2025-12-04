import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 95 },
    { name: 'ReactJS', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'SCSS', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Angular Material', level: 90 },
    { name: 'Storybook.js', level: 80 },
    { name: 'WebdriverIO', level: 95 },
    { name: 'ProtractorJS', level: 95 },
    { name: 'Mocha', level: 95 },
    { name: 'ChaiJS', level: 95 },
    { name: 'Jasmine', level: 80 },
    { name: 'Github', level: 100 },
    { name: 'Jira', level: 100 },
  ];
}
