interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'File Organizer',
    description: "The File Organizer Tool swiftly sorts files in directories by their extensions. With a user-friendly interface, it categorizes files into groups like 'Audio' or 'Video'. Its standout 'Undo' feature allows easy reversals, ensuring flexibility and ease for users. Perfect for decluttering digital spaces efficiently.",
    imgSrc: '/static/images/FileOrganizer.png',
    href: 'https://github.com/Aw4iskh4n/FolderOrganizer-GUI',
  },
  {
    title: 'PwnedPasswd',
    description: "It is a secure tool that allows users to check if their passwords have been exposed in known data breaches. Harnessing the power of Python 🐍 and Flask, it ensures that user passwords are not sent or stored, offering peace of mind about online security.",
    imgSrc: '/static/images/pwnedpasswd.png',
    href: 'https://github.com/Aw4iskh4n/pwnedpasswd',
  },
  {
    title: 'Linux Firewall',
    description: "This project is a simple firewall utility built using Python and the Scapy library. It allows you to monitor network traffic, block or unblock IP addresses and domains, and manage custom firewall rules.",
    imgSrc: '/static/images/firewall.png',
    href: 'https://github.com/Aw4iskh4n/Semester-II-Project',
  },
]

export default projectsData
