import { Link } from "../../components/link";
import {
	ExperienceAndEducation,
	Hobbies,
	Languages,
	PersonalInformation,
} from "../get-cv-data";

export const PERSONAL_INFORMATION: PersonalInformation = {
	name: "John Doe",
	title: "Best Developer",
	summary: "Airedale who moved my cheese when the cheese comes out everybody's happy. Cheeseburger cheese and wine danish fontina feta smelly cheese smelly cheese taleggio halloumi. Everyone loves stilton feta ricotta the big cheese cheese slices gouda dolcelatte. Gouda jarlsberg.",
	tags: [
		{
			icon: "location",
			altText: "current location",
			text: "Lost Town, Genovia",
		},
		{
			icon: "birthday",
			altText: "birthday",
			text: "Nov, 1981",
		},
		{
			icon: "phone",
			altText: "mobile phone",
			text: "+11 1234 567 890",
		},
		{
			icon: "email",
			altText: "email address",
			text: "email@address.com",
			href: "mailto:email@address.com",
		},
		{
			icon: "github",
			altText: "github profile",
			text: "cjoecker",
			href: "https://github.com/cjoecker",
		},
		{
			icon: "linkedin",
			altText: "linkedin profile",
			text: "myprofilename",
			href: "https://www.linkedin.com/in/myprofilename/",
		},
		{
			icon: "passport",
			altText: "citizenship",
			text: "German citizenship",
		},
	],
};

export const LANGUAGES: Languages = [
	{ language: "English", level: "Fluent" },
	{ language: "Esperanto", level: "Fluent" },
	{ language: "Na'vi", level: "Mother tongue" },
	{ language: "Quenya", level: "Good command" },
];

export const HOBBIES: Hobbies = "**Apps development**: [d-cide](https://d-cide.me/), [3 Point Estimator](https://cjoecker.github.io/3-point-estimator/), [Core Values Finder](https://cjoecker.github.io/core-values-finder/), [BrainMe Geography](https://youtu.be/kxmVIVph09Q)\n\n**Open source contributions**: React, Remix, and Prisma";

const bestCompany: ExperienceAndEducation = {
	institution: "Best Company Inc",
	location: "Lost Town, Genovia",
	positions: [
		{
			title: "Senior Destroyer",
			startDate: new Date("2019-06"),
			endDate: "today",
			descriptionBlocks: [
				{
					text: `Swab cable nipper Sea Legs skysail fathom barque reef sails poop deck no prey, no pay. Cackle fruit holystone dance the hempen jig Buccaneer handsomely Shiver me timbers gally lass chase guns Privateer.
Barque take a caulk swab parley gun starboard long boat bounty loaded [holystone dance the hempen jig Buccaneer](https://www.google.com/) to the gunwalls broadside.
Log yawl hearties salmagundi tack gangplank lass schooner crack Jennys tea cup yardarm. Fluke tender long boat draft gaff broadside gunwalls scurvy snow.`,
					tagsTitle: "Tech Stack",
					tags: [
						"React",
						"TypeScript",
						"Javascript",
						"Remix",
						"Tailwind",
						"Prisma",
						"Azure",
						"Docker",
						"Kubernetes",
						"Jenkins",
						"Jest",
						"Cypress",
						"Scrum",
					],
				},
				{
					text: "Scallywag ye Sea Legs warp gaff squiffy ahoy jolly boat rutters walk [the plank Nelsons folly](https://youtu.be/) hulk strike colors Arr prow chantey scuppers six pounders snow.",
					tagsTitle: "Methods and Tools",
					tags: [
						"Figma",
						"user tests",
						"user journey map",
						"personas",
						"accessibility",
						"red routes",
						"card sorting",
						"ideation workshops",
					],
				},
				{
					text: "Mizzen league lad heave down crimp lugger bucko squiffy landlubber [or just lubber tackle](https://www.facebook.com).",
					tagsTitle: "Main Tasks",
					tags: [
						"opening of new company abroad",
						"talent acquisition",
						"office management",
					],
				},
			],
		},
	],
};

const okayCompany: ExperienceAndEducation = {
	institution: "Okay Company",
	location: "Lost Town, Genovia",
	positions: [
		{
			title: "Chaos Manager",
			startDate: new Date("2018-04"),
			endDate: new Date("2019-05"),
			descriptionBlocks: [
				{
					text: "Barkadeer to go on account league blow the man down aye Pirate Round nipperkin cutlass Davy Jones' Locker marooned. Parrel cackle fruit dance the hempen jig poop deck man-of-war mutiny hogshead tack walk the plank gibbet. Matey lugger holystone boatswain bilged on her anchor warp interloper heave down pirate grog blossom.",
					tagsTitle: "Main Tasks",
					tags: [
						"project management",
						"product owner of IoT products",
						"development of employees",
						"costing",
					],
				},
			],
		},
		{
			title: "Farm Developer",
			startDate: new Date("2015-02"),
			endDate: new Date("2018-03"),
			descriptionBlocks: [
				{
					text: "Mizzen league lad heave down crimp lugger bucko squiffy landlubber or just lubber tackle. Matey [salmagundi tackle lass](https://youtu.be/) fer yer chains scourge of the seven seas Sink me lass salmagundi loaded to the gunwalls. Snow pink bilge rat knave hulk handsomely boatswain salmagundi tackle lass.",
					tagsTitle: "Tech Stack",
					tags: ["Javascript", ".NET", "C#", "Visual Basic"],
				},
			],
		},
	],
};

const firstCompany: ExperienceAndEducation = {
	institution: "Boring Company GmbH",
	location: "Lost Town, Genovia",
	positions: [
		{
			title: "Boring Development Intern",
			startDate: new Date("2014-02"),
			endDate: new Date("2014-08"),
			descriptionBlocks: [
				{
					text: "Development of [killick Davy Jones](https://www.facebook.com) Mizzen league lad heave down crimp lugger bucko squiffy.",
					tagsTitle: "Tech Stack",
					tags: [".NET", "Visual Basic"],
				},
			],
		},
	],
};

export const EXPERIENCE: ExperienceAndEducation[] = [
	bestCompany,
	okayCompany,
	firstCompany,
];

const master: ExperienceAndEducation = {
	institution: "Master of Business Failing",
	location: "Lost Town, Genovia",
	positions: [
		{
			title: "Fake University",
			startDate: new Date("2016-02"),
			endDate: new Date("2018-04"),
			descriptionBlocks: [
				{
					text: "Gangway mutiny fore killick Davy Jones' Locker lateen sail nipper dead men tell no tales schooner gaff. Tackle scurvy d",
					tagsTitle: "Focus",
					tags: [
						"Business Intelligence",
						"Business Administrations",
						"Engineering Management",
					],
				},
			],
		},
	],
};

const bachelor: ExperienceAndEducation = {
	institution: "Lying Engineering (B. Eng.)",
	location: "Lost Town, Genovia",
	positions: [
		{
			title: "University of Applied Lying",
			startDate: new Date("2011-09"),
			endDate: new Date("2014-08"),
			descriptionBlocks: [
				{
					text: "Awards: Best Liar Ever – German state merit scholarship 2012 – 2013",
					tagsTitle: "Focus",
					tags: ["Production", "Automation", "Robotics"],
				},
			],
		},
	],
};

export const EDUCATION: ExperienceAndEducation[] = [master, bachelor];
