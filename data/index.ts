export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	// { name: 'Certifications', link: '#certifications' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title:
			'I value working closely with clients and maintaining clear communication.',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Currently building an ecommerce website',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Wanna work together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Netflix clone',
		des: 'Netflix clone built with Next.js, MongoDB, Prisma, and React',
		img: '/netflix.png',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
		link: 'https://netflix-clone-lido.vercel.app',
    github:"https://github.com/LidoHon"
	},
	{
		id: 2,
		title: 'Amazon-Clone',
		des: 'Amazon clone developed using React, Firebase, and Tailwind CSS".',
		img: '/amazon.png',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
		link: 'https://exquisite-rabanadas-f7691d.netlify.app',
    github:"https://github.com/LidoHon"
	},
	{
		id: 3,
		title: 'Evangadi Forum',
		des: 'Evangadi Forum: A platform where students can ask and answer questions, and engage with each other. Built with React, MongoDB, and Tailwind CSS."',
		img: '/evangadi_forum.png',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
		link: 'https://github.com/LidoHon/Evangadi_Forum.git',
    github:"https://github.com/LidoHon"
	},
	{
		id: 4,
		title: 'Job search ',
		des: 'a job search project built using react and react bootstrap',
		img: 'netflix_home.png',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
		link: 'https://github.com/LidoHon/job-search-Reach-project.git',
    github:"https://github.com/LidoHon"
	},
];

export const testimonials = [
	{
		quote:
			"Collaborating with Lidet was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.  If you're seeking to elevate your website and elevate your brand, Lidet is the ideal partner.",
		name: 'Haymanot Honelign ',
		title: 'Founder of Hanu_Bet and Hamek Design',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: '/cloud.svg',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'appwrite',
		img: '/app.svg',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: '/host.svg',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'stream',
		img: '/s.svg',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'docker.',
		img: '/dock.svg',
		nameImg: '/dockerName.svg',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Frontend Engineer Intern',
		desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'Mobile App Dev - JSM Tech',
		desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'Freelance App Dev Project',
		desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Lead Frontend Developer',
		desc: 'Developed and maintained user-facing features using modern frontend technologies.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
    link:"https://github.com/LidoHon"
	},
	{
		id: 2,
		img: '/twit.svg',
    link:"https://x.com/LidoHon"
	},
	{
		id: 3,
		img: '/link.svg',
		link:"https://www.linkedin.com/in/lido-hon-00a8ba242/"
	},
];

export const certifications = [
	{
		id: 1,
		title: 'Backend Development and Apis',
		institution: 'FreeCode Camp',
		year: 2024,
		img: 'https://drive.google.com/file/d/15vZw4Q8HWaiA5uo1ORpvcFu2DBCZzUN8/view?usp=sharing',
	},
	{
		id: 2,
		title: 'Full-Stack Web Development',
		institution: 'Udemy',
		year: 2021,
		img: '/cert2.svg',
	},
	{
		id: 3,
		title: 'React and Redux Mastery',
		institution: 'Coursera',
		year: 2023,
		img: '/cert3.svg',
	},
];
