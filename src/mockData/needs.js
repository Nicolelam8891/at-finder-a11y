const needs = {
  'Blindness': {
    'category': 'Blindness',
    'definition': [
      'A person is functionally blind if they are unable to use vision in certain environments or for certain tasks, even with correction.',
    ],
    'technology parameter': ['Screen Readers', 'Refreshable Braille Displays'],
    'disability parameter': 'are totally blind and cannot use a mouse',
  },
  'Low Vision': {
    'category': 'Low Vision',
    'definition': [
      'Visual acuity between 20/70 and 20/400, with the best possible correction, or a visual field of 20 degrees or less.',
    ],
    'technology parameter': [
      'magnification software',
      'browser tools',
      'cctv',
      'magnifying device',
    ],
    'disability parameter': 'have low vision',
  },
  'Deaf / Hard of Hearing': {
    'category': 'Deaf / Hard of Hearing',
    'definition': [
      'Deaf: Very little to no functional hearing.',
      'Hard of Hearing: Enough functional hearing that an auditory device may be useful for amplifying sounds.',
    ],
    'technology parameter': [
      'Hearing',
      'Telecommunication',
      'Sign Language',
      'Alert Devices',
    ],
    'disability parameter': 'are deaf or hard of hearing',
  },
  'Mobility Supports for Fine Motor Issues': {
    'category': 'Mobility Supports for Fine Motor Issues',
    'definition': [
      'A person with a fine motor disability may have difficulty making precise, voluntary, and coordinated hand movements.',
    ],
    'technology parameter': [
      'Personal Care',
      'Hygiene',
      'Dressing',
      'Clothing',
      'Writing',
      'Communication',
      'Cooking',
      'Meal Preparation',
      'Home Organization',
      'Home Access',
      'Mobility',
      'Transportation',
      'Environmental Control',
      'Computer Access',
      'Internet Access',
      'Entertainment',
      'Leisure',
      'Personal Safety',
    ],
    'disability parameter': 'have fine motor disabilities',
  },
  'Mobility Supports for Gross Motor Issues': {
    'category': 'Mobility Supports for Gross Motor Issues',
    'definition': [
      'Gross motor disabilities impact large, core stabilizing muscles used for standing, walking, running, jumping, or sitting upright.',
    ],
    'technology parameter': [
      'Mobility Aids',
      'Home Access',
      'Environmental Control',
      'Communication Aids',
      'Computer Access',
      'Daily Living Aids',
      'Vehicle Modifications',
      'Recreation',
      'Leisure',
      'Personal Safety',
      'Emergency Response',
    ],
    'disability parameter': 'have gross motor disabilities',
  },
  'Cognitive Supports for Reading and Writing': {
    'category': 'Cognitive Supports for Reading and Writing',
    'definition': [
      'Reading Disability: difficulty with reading fluency, speed, comprehension, or phonological processing',
      'Writing Disability: Unable to produce writing that aligns to age and cognitive levels.',
    ],
    'technology parameter': [
      'Text-to-Speech',
      'Mind Mapping',
      'Word Prediction',
      'Speech-to-Text',
      'Graphic Organizer',
    ],
    'disability parameter':
      'have cognitive disabilities in reading and writing',
  },
  'Cognitive Supports for Math': {
    'category': 'Cognitive Supports for Math',
    'definition': [
      'Math Disability / Dyscalculia: difficulty with number-related concepts, including math reasoning, problem solving, and calculation.',
    ],
    'technology parameter': ['computation', 'calculators'],
    'disability parameter': 'have cognitive disabilities in math',
  },
  'Cognitive Supports for Focus': {
    'category': 'Cognitive Supports for Focus',
    'definition': [
      'A person with a cognitive focus disability may have difficulty finishing tasks they are capable of completing.',
    ],
    'technology parameter': [
      'noise-cancelling headphones',
      'background music',
      'time management',
      'white noise',
      'brain training',
      'note taking',
      'calendar',
    ],
    'disability parameter': 'have difficulty maintaining cognitive focus',
  },
  'Communication Supports': {
    'category': 'Communication Supports',
    'definition': [
      'Communication disabilities affect receiving, sending, processing, and understanding concepts through verbal, nonverbal, & graphic symbol systems.',
    ],
    'technology parameter': ['physical', 'cognitive'],
    'disability parameter': 'have communication disabilities',
  },
};

export default needs;
