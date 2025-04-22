import { Link } from '../components/link'
import {
  ExperienceAndEducation,
  Hobbies,
  Languages,
  PersonalInformation,
} from './curriculum-information.models'

const EXPERIENCE_YEARS = new Date().getFullYear() - 2014

export const PERSONAL_INFORMATION: PersonalInformation = {
  name: 'Christian Jöcker',
  title: 'Full-Stack Developer and UX/UI Designer',
  summary: (
    <>
      Working for more than {EXPERIENCE_YEARS} years in the tech industry,
      my passion is to improve people's lives with software. Technology and working methods are for me just a mean to make that happen.
      Having fun in team and constructive discussions at eye level to make ideas better
      is also high priority for me.
    </>
  ),
  tags: [
    {
      icon: 'location',
      altText: 'current location',
      text: 'Valencia, Spain',
    },
    {
      icon: 'birthday',
      altText: 'birthday',
      text: 'Sep, 1991 (32y)',
    },
    {
      icon: 'phone',
      altText: 'mobile phone',
      text: '+34 654 744 760',
    },
    {
      icon: 'email',
      altText: 'email address',
      text: 'c.jocker@hotmail.com',
      href: 'mailto:c.jocker@hotmail.com',
    },
    {
      icon: 'github',
      altText: 'github profile',
      text: 'cjoecker',
      href: 'https://github.com/cjoecker',
    },
    {
      icon: 'web',
      altText: 'pagina web',
      text: 'jocker.dev',
      href: 'https://jocker.dev/',
    },
    {
      icon: 'linkedin',
      altText: 'linkedin profile',
      text: 'christianjoecker',
      href: 'https://www.linkedin.com/in/christianjoecker/',
    },
    {
      icon: 'passport',
      altText: 'citizenship',
      text: 'German and Colombian citizenship',
    },
  ],
}

export const LANGUAGES: Languages = [
  { language: 'English', level: 'Fluent' },
  { language: 'German', level: 'Fluent' },
  { language: 'Spanish', level: 'Mother tongue' },
  { language: 'Portuguese', level: 'Good command' },
]

export const HOBBIES: Hobbies = (
  <p>
    <p className="mb-2">
      <strong>Apps development</strong>: <Link href="https://d-cide.me/">d-cide</Link>
      {', '}
      <Link href="https://cjoecker.github.io/3-point-estimator/">3 Point Estimator</Link>
      {', '}
      <Link href="https://cjoecker.github.io/core-values-finder/">Core Values Finder</Link>
      {', '}
      <Link href="https://youtu.be/kxmVIVph09Q">BrainMe Geography</Link>
    </p>
    <p>
      <strong>Open source contributions:</strong> Material-UI, Framer-motion, Remix, and Prisma
    </p>
  </p>
)
const freelance: ExperienceAndEducation = {
  institution: 'Freelancer',
  location: 'Valencia, Spain',
  positions: [
    {
      title: 'Full-Stack Developer, UX/UI Designer and DevSecOps',
      startDate: new Date('2023-03'),
      endDate: 'today',
      descriptionBlocks: [
        {
          text: (
            <>
              <p>
                Development of custom web platforms for different industries.
              </p>
              <p>
                For my latest customer, I&apos;m leading the development of an{' '}
                <Link href="https://www.smartcube360.de/post/waermepumpe-smart-home">
                  IoT platform for controlling air filters and heat pumps.
                </Link>{' '}.I have done the user research, service design, requirements engineering, full-stack development, DevSecOps and QA.
              </p>
            </>
          ),
          tagsTitle: 'Tech Stack',
          tags: [
            'Remix/React Router',
            'React',
            'TypeScript',
            'Javascript',
            'Tailwind',
            'Prisma',
            'AWS',
            'Docker',
            'Vitest',
            'PostgreSQL',
          ],
        },
      ],
    },
  ],
}

const maibornWolff: ExperienceAndEducation = {
  institution: 'MaibornWolff GmbH',
  location: 'Munich, Germany',
  positions: [
    {
      title: 'Senior Web Developer & UX/UI Designer',
      startDate: new Date('2019-06'),
      endDate: new Date('2023-03'),
      descriptionBlocks: [
        {
          text: (
            <>
              <p>
                Development of custom web applications for companies in different
                industries like automobile, tourism, airlines, robotics, and medicine.
              </p>
              <p>
                In my latest project, I was leading a team of 6 developers and designers. We were developing a{' '}
                <Link href="https://www.maibornwolff.de/en/innovation/robot-assisted-interaction-systems/">
                  web application for disabled employees
                </Link>{' '}
                to enable them to work supported by a robotic arm.
              </p>
              <p>
                Before that, I was working for one of the biggest automobile manufacturers in
                Germany. We were developing 13 internal applications for logistics, in a team of 40
                developers in 5 countries.
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
              UX/UI design and{' '}
              <Link href="https://youtu.be/q1MWfU4jGc8">agile requirements engineering</Link> for
              web and mobile applications before or during the development of the applications.
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
              Foundation and supervision of{' '}
              <Link href="https://www.maibornwolff.de/en/insights/jobs-for-software-developer-valencia/">
                subsidiary company in Valencia, Spain.
              </Link>
            </p>
          ),
          tagsTitle: 'Main Tasks',
          tags: ['opening of new company abroad', 'talent acquisition', 'office management'],
        },
      ],
    },
  ],
}

const kuka: ExperienceAndEducation = {
  institution: 'KUKA',
  location: 'Augsburg, Germany',
  positions: [
    {
      title: 'Area Manager – Virtual Commissioning',
      startDate: new Date('2018-04'),
      endDate: new Date('2019-05'),
      descriptionBlocks: [
        {
          text: (
            <p>
              Tech lead and area management of 10 employees. Foundation and training of subsidiary
              department in Shanghai, China. Set guidelines and patterns for the virtual
              commissioning in the automobile industry.
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
      title: 'Software Developer – Virtual Commissioning',
      startDate: new Date('2015-02'),
      endDate: new Date('2018-03'),
      descriptionBlocks: [
        {
          text: (
            <>
              <p>
                Development of <Link href="https://youtu.be/kQpgYI0kBF8">3D behavior models</Link>{' '}
                for the virtual commissioning of high complex automated production lines. Design and
                development of UI&apos;s for the analysis and processing of signals from devices
                like PLCs and industrial robots.
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
export const EXPERIENCE: ExperienceAndEducation[] = [freelance, maibornWolff, kuka]

const steinbeis: ExperienceAndEducation = {
  institution: 'Master of Business Engineering (MBE®)',
  location: 'Filderstadt, Germany',
  positions: [
    {
      title: 'Steinbeis Center of Management and Technology',
      startDate: new Date('2016-02'),
      endDate: new Date('2018-04'),
      descriptionBlocks: [
        {
          text: (
            <p>
              Dual study with exchange in Kelly School of Business (USA), Jönköping International
              Business School (Sweden) and Tokyo University of Agriculture and Technology (Japan)
            </p>
          ),
          tagsTitle: 'Focus',
          tags: ['Business Intelligence', 'Business Administrations', 'Engineering Management'],
        },
      ],
    },
  ],
}

const wildau: ExperienceAndEducation = {
  institution: 'Mechanical Engineering (B. Eng.)',
  location: 'Wildau, Germany',
  positions: [
    {
      title: 'University of Applied Science TH-Wildau',
      startDate: new Date('2011-09'),
      endDate: new Date('2014-08'),
      descriptionBlocks: [
        {
          text: <p>Awards: Deutschlandstipendium – German state merit scholarship 2012 – 2013</p>,
          tagsTitle: 'Focus',
          tags: ['Production', 'Automation', 'Robotics'],
        },
      ],
    },
  ],
}

export const EDUCATION: ExperienceAndEducation[] = [steinbeis, wildau]
