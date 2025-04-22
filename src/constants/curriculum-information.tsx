import {Link} from '../components/link'
import {
	ExperienceAndEducation,
	Hobbies,
	Languages,
	PersonalInformation,
} from './curriculum-information.models'

export const PERSONAL_INFORMATION: PersonalInformation = {
	name: 'John Doe',
	title: 'Best Developer',
	summary: (
		<>
			Airedale who moved my cheese when the cheese comes out everybody&apos;s happy. Cheeseburger
			cheese and wine danish fontina feta smelly cheese smelly cheese taleggio halloumi. Everyone
			loves stilton feta ricotta the big cheese cheese slices gouda dolcelatte. Gouda jarlsberg.
		</>
	),
	tags: [
		{
			icon: 'location',
			altText: 'current location',
			text: 'Lost Town, Genovia',
		},
		{
			icon: 'birthday',
			altText: 'birthday',
			text: 'Nov, 1981',
		},
		{
			icon: 'phone',
			altText: 'mobile phone',
			text: '+11 1234 567 890',
		},
		{
			icon: 'email',
			altText: 'email address',
			text: 'email@address.com',
			href: 'mailto:email@address.com',
		},
		{
			icon: 'github',
			altText: 'github profile',
			text: 'cjoecker',
			href: 'https://github.com/cjoecker',
		},
		{
			icon: 'twitter',
			altText: 'twitter account',
			text: '@JockerDev',
			href: 'https://twitter.com/JockerDev',
		},
		{
			icon: 'linkedin',
			altText: 'linkedin profile',
			text: 'myprofilename',
			href: 'https://www.linkedin.com/in/myprofilename/',
		},
		{
			icon: 'passport',
			altText: 'citizenship',
			text: 'German citizenship',
		},
	],
}

export const LANGUAGES: Languages = [
	{language: 'English', level: 'Fluent'},
	{language: 'Esperanto', level: 'Fluent'},
	{language: "Na'vi", level: 'Mother tongue'},
	{language: 'Quenya', level: 'Good command'},
]

export const HOBBIES: Hobbies = (
	<div>
		<p className="mb-2">
			<strong>Apps development</strong>:
			<Link href="https://d-cide.me/">d-cide</Link>
			{', '}
			<Link href="https://cjoecker.github.io/3-point-estimator/">3 Point Estimator</Link>
			{', '}
			<Link href="https://cjoecker.github.io/core-values-finder/">Core Values Finder</Link>
			{', '}
			<Link href="https://youtu.be/kxmVIVph09Q">BrainMe Geography</Link>
		</p>
		<p>
			<strong>Open source contributions:</strong> React, Remix, and Prisma
		</p>
	</div>
)

const bestCompany: ExperienceAndEducation = {
	institution: 'Best Company Inc',
	location: 'Lost Town, Genovia',
	positions: [
		{
			title: 'Senior Destroyer',
			startDate: new Date('2019-06'),
			endDate: 'today',
			descriptionBlocks: [
				{
					text: (
						<>
							<p>
								Swab cable nipper Sea Legs skysail fathom barque reef sails poop deck no prey, no
								pay. Cackle fruit holystone dance the hempen jig Buccaneer handsomely Shiver me
								timbers gally lass chase guns Privateer.
							</p>
							<p>
								Barque take a caulk swab parley gun starboard long boat bounty loaded{' '}
								<Link href="https://www.google.com/">holystone dance the hempen jig Buccaneer</Link>{' '}
								to the gunwalls broadside.
							</p>
							<p>
								Log yawl hearties salmagundi tack gangplank lass schooner crack Jennys tea cup
								yardarm. Fluke tender long boat draft gaff broadside gunwalls scurvy snow.
							</p>
						</>
					),
					tagsTitle: 'Tech Stack',
					tags: [
						'React',
						'TypeScript',
						'Javascript',
						'Remix',
						'Tailwind',
						'Prisma',
						'Azure',
						'Docker',
						'Kubernetes',
						'Jenkins',
						'Jest',
						'Cypress',
						'Scrum',
					],
				},
				{
					text: (
						<p>
							Scallywag ye Sea Legs warp gaff squiffy ahoy jolly boat rutters walk{' '}
							<Link href="https://youtu.be/">the plank Nelsons folly </Link> hulk strike colors Arr
							prow chantey scuppers six pounders snow.
						</p>
					),
					tagsTitle: 'Methods and Tools',
					tags: [
						'Figma',
						'user tests',
						'user journey map',
						'personas',
						'accessibility',
						'red routes',
						'card sorting',
						'ideation workshops',
					],
				},
				{
					text: (
						<p>
							Mizzen league lad heave down crimp lugger bucko squiffy landlubber{' '}
							<Link href="https://www.facebook.com">or just lubber tackle.</Link>
						</p>
					),
					tagsTitle: 'Main Tasks',
					tags: ['opening of new company abroad', 'talent acquisition', 'office management'],
				},
			],
		},
	],
}

const okayCompany: ExperienceAndEducation = {
	institution: 'Okay Company',
	location: 'Lost Town, Genovia',
	positions: [
		{
			title: 'Chaos Manager',
			startDate: new Date('2018-04'),
			endDate: new Date('2019-05'),
			descriptionBlocks: [
				{
					text: (
						<p>
							Barkadeer to go on account league blow the man down aye Pirate Round nipperkin cutlass
							Davy Jones&apos; Locker marooned. Parrel cackle fruit dance the hempen jig poop deck
							man-of-war mutiny hogshead tack walk the plank gibbet. Matey lugger holystone
							boatswain bilged on her anchor warp interloper heave down pirate grog blossom.
						</p>
					),
					tagsTitle: 'Main Tasks',
					tags: [
						'project management',
						'product owner of IoT products',
						'development of employees',
						'costing',
					],
				},
			],
		},
		{
			title: 'Farm Developer',
			startDate: new Date('2015-02'),
			endDate: new Date('2018-03'),
			descriptionBlocks: [
				{
					text: (
						<>
							<p>
								Mizzen league lad heave down crimp lugger bucko squiffy landlubber or just lubber
								tackle. Matey <Link href="https://youtu.be/">salmagundi tackle lass</Link> fer yer
								chains scourge of the seven seas Sink me lass salmagundi loaded to the gunwalls.
								Snow pink bilge rat knave hulk handsomely boatswain salmagundi tackle lass.
							</p>
						</>
					),
					tagsTitle: 'Tech Stack',
					tags: ['Javascript', '.NET', 'C#', 'Visual Basic'],
				},
			],
		},
	],
}

const firstCompany: ExperienceAndEducation = {
	institution: 'Boring Company GmbH',
	location: 'Lost Town, Genovia',
	positions: [
		{
			title: 'Boring Development Intern',
			startDate: new Date('2014-02'),
			endDate: new Date('2014-08'),
			descriptionBlocks: [
				{
					text: (
						<p>
							Development of <Link href="https://www.facebook.com">killick Davy Jones</Link> Mizzen
							league lad heave down crimp lugger bucko squiffy.
						</p>
					),
					tagsTitle: 'Tech Stack',
					tags: ['.NET', 'Visual Basic'],
				},
			],
		},
	],
}

export const EXPERIENCE: ExperienceAndEducation[] = [bestCompany, okayCompany, firstCompany]

const master: ExperienceAndEducation = {
	institution: 'Master of Business Failing',
	location: 'Lost Town, Genovia',
	positions: [
		{
			title: 'Fake University',
			startDate: new Date('2016-02'),
			endDate: new Date('2018-04'),
			descriptionBlocks: [
				{
					text: (
						<p>
							Gangway mutiny fore killick Davy Jones&apos; Locker lateen sail nipper dead men tell
							no tales schooner gaff. Tackle scurvy d
						</p>
					),
					tagsTitle: 'Focus',
					tags: ['Business Intelligence', 'Business Administrations', 'Engineering Management'],
				},
			],
		},
	],
}

const bachelor: ExperienceAndEducation = {
	institution: 'Lying Engineering (B. Eng.)',
	location: 'Lost Town, Genovia',
	positions: [
		{
			title: 'University of Applied Lying',
			startDate: new Date('2011-09'),
			endDate: new Date('2014-08'),
			descriptionBlocks: [
				{
					text: <p>Awards: Best Liar Ever – German state merit scholarship 2012 – 2013</p>,
					tagsTitle: 'Focus',
					tags: ['Production', 'Automation', 'Robotics'],
				},
			],
		},
	],
}

export const EDUCATION: ExperienceAndEducation[] = [master, bachelor]
