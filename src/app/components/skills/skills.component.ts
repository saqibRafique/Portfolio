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
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'SCSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Storybook.js', level: 80 },
    { name: 'WebdriverIO', level: 85 },
    { name: 'Jasmine', level: 80 },
  ];
}
