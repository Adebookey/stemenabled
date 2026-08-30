export const site = {
  name: "STEMEnabled",
  tagline: "Empowering Schools. Developing Creators. Building the Future.",
  description:
    "STEMEnabled is a STEM transformation partner helping schools build practical STEM infrastructure, teacher capability and future-ready student programmes.",
  phone: "+234 708 667 1984",
  email: "omotosoadebukunola@gmail.com",
  whatsapp: "2347086671984",
  location: "Lagos, Nigeria",
};

export const images = {
  hero: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=85",
  lab: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  robotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
  teacher: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
  maker: "https://images.unsplash.com/photo-1563770660941-10a22c95931a?auto=format&fit=crop&w=1200&q=85",
  design: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
};

export const services = [
  {
    number: "01",
    title: "STEM Lab Setup",
    description: "Design and equip practical STEM laboratories around your school's real objectives, space and budget.",
    bullets: ["Computers", "Raspberry Pi & Arduino", "Robotics & sensors", "3D design", "Networking & lab infrastructure"],
    href: "/stem-lab",
  },
  {
    number: "02",
    title: "Teacher STEM Training",
    description: "Build internal teacher capability so your school can confidently deliver practical technology education.",
    bullets: ["Scratch", "AI education", "Physical computing", "Robotics", "Project-based learning"],
    href: "/teacher-training",
  },
  {
    number: "03",
    title: "Student STEM Programmes",
    description: "Structured, age-appropriate learning experiences that move students from consuming technology to creating with it.",
    bullets: ["Block coding", "Robotics", "AI", "3D design", "IoT & engineering projects"],
    href: "/programmes",
  },
  {
    number: "04",
    title: "STEM Curriculum Development",
    description: "Build a structured STEM pathway aligned with your students, curriculum, infrastructure and ambitions.",
    bullets: ["Age pathways", "Learning outcomes", "Projects", "Assessment", "Implementation plans"],
    href: "/consulting",
  },
  {
    number: "05",
    title: "STEM Clubs & Innovation",
    description: "Establish sustainable clubs and innovation programmes that give students a reason to build, compete and present.",
    bullets: ["Robotics clubs", "Coding clubs", "AI clubs", "Hackathons", "Innovation showcases"],
    href: "/programmes",
  },
  {
    number: "06",
    title: "STEM Consulting",
    description: "Give school leadership a practical roadmap for what to buy, what to teach and how to scale sustainably.",
    bullets: ["Readiness assessment", "Equipment planning", "Programme strategy", "Impact measurement", "Scale planning"],
    href: "/consulting",
  },
];

export const teacherProgrammes = [
  { title: "Scratch & Computational Thinking", description: "Teachers learn how to turn Scratch into a structured classroom tool for logic, sequencing, problem-solving, storytelling and beginner programming." },
  { title: "3D Design & Digital Fabrication", description: "Teachers develop practical skills in tools such as Tinkercad and Blender and learn how to guide students from an idea to a digital prototype." },
  { title: "AI for the Classroom", description: "An accessible introduction to AI concepts, image classification and responsible use of AI tools, with activities teachers can adapt for different age groups." },
  { title: "Physical Computing with Arduino", description: "Teachers build confidence with microcontrollers, sensors, LEDs, motors and simple automation so they can facilitate hands-on engineering projects." },
  { title: "Raspberry Pi & IoT", description: "A practical pathway into Raspberry Pi, Pico/Pico W, networking, sensors and connected devices, including classroom-ready IoT project ideas." },
  { title: "Robotics & Project Facilitation", description: "Teachers learn the fundamentals of robot construction, sensing, motors and programming while developing strategies for guiding open-ended projects." },
  { title: "Project-Based STEM Learning", description: "Teachers learn how to structure the cycle of idea, design, build, test, improve and present, with clear outcomes and assessment points." },
  { title: "STEM Curriculum Implementation", description: "Translate a school's STEM strategy into term plans, projects, assessment, lab usage and sustainable classroom routines." },
];

export const programmes = [
  {
    level: "FOUNDATION",
    audience: "Digital Creators",
    description: "Build curiosity, computational thinking and confidence with technology through visual programming and simple making activities.",
    items: [
      { title: "Block Coding with Scratch", icon: "⌘", description: "Storytelling, animations, games, sequences, events, conditions, loops, variables and introductory computational thinking." },
      { title: "Digital Creativity", icon: "◇", description: "Creative digital projects that introduce students to design, problem-solving, presentation and responsible technology use." },
      { title: "Basic Robotics", icon: "▣", description: "Simple robot construction and movement activities that introduce mechanisms, sensors and the idea of programming physical systems." },
    ],
  },
  {
    level: "INTERMEDIATE",
    audience: "STEM Makers",
    description: "Combine software, electronics and design as students begin building systems that respond to the physical world.",
    items: [
      { title: "3D Design", icon: "◇", description: "3D modelling, product design, prototyping, Tinkercad, Blender, design thinking and digital fabrication concepts." },
      { title: "Arduino & Electronics", icon: "◉", description: "Microcontrollers, circuits, LEDs, buttons, sensors, motors and simple automation projects using Arduino." },
      { title: "Introduction to AI", icon: "◎", description: "AI concepts, data, image classification, responsible AI and practical introductory projects using accessible tools." },
      { title: "Robotics", icon: "▣", description: "Robot construction, programming, sensors, motors, problem-solving and increasingly autonomous behaviours." },
    ],
  },
  {
    level: "ADVANCED",
    audience: "Technology Innovators",
    description: "Develop integrated engineering projects that combine computing, connectivity, AI, automation and prototyping.",
    items: [
      { title: "Raspberry Pi & Pico W", icon: "◉", description: "Python, Raspberry Pi, Pico/Pico W, GPIO, sensors, networking and edge-computing concepts." },
      { title: "IoT & Intelligent Systems", icon: "◎", description: "Connected sensors, data collection, dashboards, automation and practical Internet of Things projects." },
      { title: "Advanced Robotics & Automation", icon: "▣", description: "Integrated robotics projects involving sensing, control, navigation, automation and system-level problem-solving." },
      { title: "Engineering Prototyping", icon: "◇", description: "Move from problem definition to design, prototype, testing, iteration and presentation of technology solutions." },
    ],
  },
];

export const consultingAreas = [
  { title: "STEM Readiness Assessment", description: "Evaluate your school's existing infrastructure, people, programmes, space and objectives to establish a realistic starting point." },
  { title: "STEM Lab Planning", description: "Translate your learning goals and available space into a practical lab concept, equipment list, workstation plan and implementation sequence." },
  { title: "Equipment Strategy", description: "Identify the right mix of computers, microcontrollers, robotics kits, sensors, tools and digital-design resources without buying equipment simply because it is available." },
  { title: "Curriculum & Programme Strategy", description: "Design a coherent progression across age groups, technologies, projects and learning outcomes so STEM becomes a programme rather than isolated activities." },
  { title: "Teacher Capacity Strategy", description: "Determine the skills your educators need, structure training pathways and plan classroom support so capability remains inside the school." },
  { title: "STEM Club & Innovation Strategy", description: "Create a sustainable structure for robotics, coding, AI, maker and innovation clubs, including projects, showcases, competitions and calendars." },
  { title: "Impact & Implementation Planning", description: "Define practical milestones, evidence of learning, implementation responsibilities and review points to help leadership track progress." },
  { title: "STEM Growth Roadmapping", description: "Build a phased plan that can start with a focused pilot and grow toward a broader STEM ecosystem as capability, demand and resources increase." },
];

export const aboutPillars = [
  ["Practical STEM", "We focus on learning experiences where students and teachers build, test, troubleshoot and present tangible work."],
  ["Educator Capability", "Our approach prioritises teacher confidence and classroom implementation so schools can develop sustainable internal capacity."],
  ["Technology With Purpose", "We connect tools such as Raspberry Pi, Arduino, AI, robotics and 3D design to real learning objectives rather than technology for its own sake."],
  ["Context-Aware Strategy", "Recommendations are shaped by the school's learners, infrastructure, curriculum, budget, ambitions and growth plans."],
];

export const experience = [
  ["10+ years", "STEM and technology education experience across robotics, programming, physical computing and digital making."],
  ["National Robotics Olympiad", "Two-time winner — Junior Open Category in 2013 and Senior Open Category in 2015."],
  ["World Robot Olympiad", "Represented Nigeria in Indonesia in 2013 and Qatar in 2015."],
  ["Educator Capacity Building", "Experience delivering educator bootcamps, Train-the-Trainer workshops and technology-enabled teaching programmes."],
  ["Nigeria & West Africa", "STEM programme delivery and facilitation experience across Nigeria and Ghana, including university-level IoT education."],
  ["Curriculum Development", "Designed programmes spanning robotics, embedded systems, Python, AI, physical computing and digital fabrication."],
];

export const institutionalExperience = [
  "Raspberry Pi",
  "Global Code",
  "University of Ghana",
  "University of Cape Coast",
  "STEMCafe",
  "The Creative Kids Zone",
  "Lagos State Science Research and Innovation Council",
  "Senator Abiru Innovation Lab",
];

export const selectedExperience = [
  ["STEM Educator Training", "Teacher capacity-building, bootcamps and practical workshops designed to improve technology teaching confidence."],
  ["Raspberry Pi & IoT Education", "Hands-on IoT education using Raspberry Pi and Pico W, including university and learner-focused programmes."],
  ["Robotics", "Competition and instructional experience spanning national robotics programmes and representation at the World Robot Olympiad."],
  ["School STEM Programmes", "Hands-on robotics, programming, physical computing and maker programmes delivered for learners across different age groups."],
  ["Curriculum Development", "Structured STEM curricula and instructional resources covering programming, embedded systems, AI, robotics and digital making."],
  ["Maker & Digital Fabrication", "Experience with 3D design, modelling, additive manufacturing concepts and project-based prototyping."],
];

export const faqs = [
  ["Do you provide the equipment for STEM labs?", "Yes. STEMEnabled can recommend and support the procurement of appropriate STEM equipment based on the school's requirements."],
  ["Do you train teachers?", "Yes. Teacher capacity building is a core part of the STEMEnabled model."],
  ["Do you train students?", "Yes. Student programmes can be delivered directly or implemented with trained school staff."],
  ["Does the school need an existing STEM lab?", "No. STEMEnabled can work with schools starting from scratch."],
  ["Can you work with an existing computer laboratory?", "Yes. Existing infrastructure can be assessed and incorporated into the STEM roadmap."],
  ["Can the programme be customised?", "Yes. Programmes can be adapted according to student age, school objectives, infrastructure and budget."],
  ["Do you offer robotics?", "Yes."],
  ["Do you offer AI education?", "Yes. STEMEnabled introduces age-appropriate AI concepts and practical tools."],
  ["Do you offer 3D design?", "Yes."],
  ["Can STEMEnabled help us establish a STEM club?", "Yes."],
  ["How much does it cost?", "Investment depends on the school's requirements, student population, infrastructure and selected programme. The process begins with a STEM Needs Assessment."],
  ["How do we get started?", "Book a STEM Needs Assessment."],
];

export const insights = [
  "Why Every Modern School Needs a STEM Strategy",
  "How to Set Up a STEM Lab in a Nigerian School",
  "10 STEM Projects Nigerian Students Can Build",
  "Why Teacher Training Is More Important Than Buying STEM Equipment",
  "How Schools Can Introduce AI Responsibly",
  "Scratch vs Traditional Coding for Young Learners",
  "Why Robotics Develops More Than Technical Skills",
  "How 3D Design Can Transform STEM Education",
  "How to Start a School Robotics Club",
  "What Should Be Inside a School STEM Lab?",
  "How STEM Can Differentiate a Private School",
  "Preparing Nigerian Students for an AI-Driven Future",
];
