import DashboardPreview from "../assets/dashborad-preview.png"
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS = [
  { category: 'Frontend', items: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Redux'] },
  { category: 'Backend', items: ['.NET Core', 'C#', 'Entity Framework'] },
  { category: 'Database & Tools', items: ['SQL Server', 'Git', 'Postman', 'REST APIs'] },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Employee Management System',
    description: 'Full-stack employee management system built using React and .NET, enabling efficient management of employee records with secure authentication, role-based access, and RESTful API integration. Supports CRUD operations, data validation, and a responsive UI for seamless user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'Tailwind CSS'],
    github: 'https://github.com/avvy123/employee-management-system',
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'A sleek, responsive chat app supporting multi-room messaging, online status indicators, and secure file sharing with end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Socket.io', 'Express'],
    github: 'https://github.com/example/chat-app',
    demo: 'https://example.com/chat-app',
  },
    {
    id: 3,
    title: 'Desk Support Ticket System',
    description: 'Frontend ticket management system built using React and Next.js, featuring dynamic CRUD operations with MockAPI, client-side authentication using localStorage, and a responsive dashboard for managing support requests efficiently.', 
    image: DashboardPreview,
    tech: ['Next js', 'React', 'Javascript', 'REST Api', 'localStorage'],
    github: 'https://github.com/avvy123/desk-support-ticket-tool',
    demo: 'https://desk-support-ticket-tool.vercel.app/',
  }
];
