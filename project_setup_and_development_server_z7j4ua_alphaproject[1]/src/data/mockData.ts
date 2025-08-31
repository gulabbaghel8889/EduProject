import { faker } from '@faker-js/faker';
import { Project } from '../types';

const createRandomProject = (id: number): Project => {
  const university = faker.company.name() + ' University';
  const department = faker.helpers.arrayElement(['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'Agricultural Engineering']);
  const level = faker.helpers.arrayElement(['Undergraduate', 'Postgraduate', 'PhD'] as const);
  const authorName = faker.person.fullName();

  return {
    id,
    created_at: faker.date.past({ years: 2 }).toISOString(),
    title: faker.company.catchPhrase(),
    university,
    department,
    level,
    author: authorName,
    description: faker.lorem.sentence({ min: 15, max: 25 }),
    full_description: faker.lorem.paragraphs(5),
    tags: faker.helpers.arrayElements(['AI', 'Machine Learning', 'IoT', 'Web Development', 'Blockchain', 'Robotics', 'Data Science'], { min: 2, max: 4 }),
    views: faker.number.int({ min: 100, max: 20000 }),
    downloads: faker.number.int({ min: 50, max: 5000 }),
    likes: faker.number.int({ min: 20, max: 1000 }),
    rating: parseFloat(faker.number.float({ min: 3.5, max: 5.0, precision: 0.1 }).toFixed(1)),
    comments: faker.number.int({ min: 5, max: 100 }),
    status: faker.helpers.arrayElement(['Published', 'Under Review', 'Draft'] as const),
    featured: faker.datatype.boolean(),
    thumbnail: `https://picsum.photos/seed/${id}/600/400`,
    supervisor: `Dr. ${faker.person.lastName()}`,
    author_info: {
      name: authorName,
      email: faker.internet.email(),
      year: faker.helpers.arrayElement(['2023', '2024', '2025']),
      profile: `https://i.pravatar.cc/150?u=${id}`
    },
    files: [
      { name: 'Project_Report.pdf', size: '5.2 MB', type: 'document' },
      { name: 'Source_Code.zip', size: '12.8 MB', type: 'code' },
    ],
    technologies: faker.helpers.arrayElements(['React', 'Python', 'TensorFlow', 'Arduino', 'Node.js', 'MongoDB'], { min: 2, max: 4 }),
    achievements: [
      'Published in International Journal',
      'Won Best Project Award at TechFest',
    ],
  };
};

export const projects: Project[] = Array.from({ length: 20 }, (_, i) => createRandomProject(i + 1));
