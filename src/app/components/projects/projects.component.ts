import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Zuub',
      description: `Contributed to the development of Zuub’s dental RCM platform,
focusing on building responsive, user-friendly interfaces using
Angular. Collaborated with cross-functional teams to enhance real-
time insurance verification and patient treatment plans, adhering
to clean code principles.`,
      image: 'assets/images/Zuub.png',
      link: 'https://www.zuub.com/',
    },
    {
      name: 'Kayak',
      description: `Delivered a Slack-integrated reporting system with 100% end-to-
end test coverage, significantly reducing manual QA eﬀorts.
Optimized smoke, sanity, and canary tests for faster deployments,
and implemented clean code and SOLID principles across the
codebase.`,
      image: 'assets/images/Kayak.png',
      link: 'https://www.kayak.com/',
    },
    {
      name: 'Best Buy Mall',
      description: `Contributed to the frontend development of BestBuyMall, 
      focusing on designing responsive UI components, optimizing performance, 
      and enhancing the user experience across devices. Improved page load 
      times and integrated interactive features using HTML, CSS, and JavaScript.`,
      image: 'assets/images/BBM.png',
      link: 'https://bestbuymall.pk/',
    },
    {
      name: 'Mono Inu Dashboard',
      description: `Developed the frontend of the Mono Inu Dashboard, creating 
      a responsive and interactive interface for monitoring cryptocurrency data. 
      Focused on data visualization, performance optimization, and ensuring a 
      smooth user experience using modern web technologies.`,
      image: 'assets/images/mono-inu.png',
      link: 'https://mono-inu-dashboard.web.app/dashboard',
    },
    {
      name: 'Cinu19',
      description: `Built the frontend for Cinu19, a dashboard application for 
      tracking cryptocurrency performance and metrics. Focused on delivering a 
      clean, responsive design and optimizing the user experience for real-time data visualization.`,
      image: 'assets/images/cinu19.png',
      link: 'https://cinu19-e3a81.web.app/',
    },
  ];
}
