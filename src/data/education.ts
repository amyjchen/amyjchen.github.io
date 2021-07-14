export type Degree = {
  name: string,
  subject?: string,
  date: Date,
  gpa: number,
  subdegree?: string,
  subdegree_subject?: string,
  notes?: string,
};

export type Education = {
  institution: string,
  location: string,
  degrees: Array<Degree>,
  activities?: string[],
};

const Stanford : Education = {
  institution: 'Stanford University',
  location: 'Stanford, CA',
  degrees: [
    {
      name: 'MS',
      subject: 'Computer Science (Real-World Computing)',
      date: new Date(2020, 5, 14),
      gpa: 3.946,
    },
    {
      name: 'BS',
      subject: 'Computer Science (Human-Computer Interaction)',
      date: new Date(2018, 5, 17), // this is half true
      gpa: 3.820,
      subdegree: 'Minor',
      subdegree_subject: 'Art Practice'
    },
  ],
  activities: [
    'Director of Spoken Word Collective', 
    'Editor-in-chief of Leland Quarterly',
  ]
};

const LOHS : Education = {
  institution: 'Lake Oswego Senior High School',
  location: 'Lake Oswego, OR',
  degrees: [
    {
      name: 'High School Diploma',
      subject: '',
      date: new Date(2014, 5, 6),
      gpa: 4.54,
      subdegree: '',
      subdegree_subject: '',
      notes: 'unweighted GPA: 3.95',
    },
  ],
}

const education = [Stanford, LOHS];

export default education;