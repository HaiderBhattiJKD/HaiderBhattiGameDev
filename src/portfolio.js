import Cv from './components/Resume.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://HaiderBhattiJKD.github.io/HaiderBhattiGameDev',
  title: 'HB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haider Ali Bhatti',
  role: 'Game Dev',
  description:
    'Im a passionate game developer with 3+ years of experience working in Unity using C#. I have a strong foundation in creating immersive gameplay mechanics, optimized performance, and visually captivating experiences. Additionally, I have basic knowledge of Unreal Engine and C++, allowing me to explore a wider range of game development tools and techniques. I thrive in turning ideas into engaging, high-quality games, and I continuously aim to push the boundaries of interactive entertainment.',
  resume: Cv,
  social: {
    linkedin: 'https://www.linkedin.com/in/haider-bhatti-38680819b/',
    github: 'https://github.com/HaiderBhattiJKD',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Rider 3D',
    description:
      'Rider 3D is an Endless Highway Bike Racing Game',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.ffgames.motoercycle.traffic.racer.bikegames.rider.motobikeracing3d&hl=en',
  },
  {
    name: 'Urban Bus Simulator',
    description:
      'Urban Bus Simulator is a Bus Simulator Game',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.ffg.offline.games.driving.city.bus.simulator.busgames&hl=en',
  },
  {
    name: 'Bike Stunt Legends',
    description:
      'Bike Stunt Legends is an exciting Bike Stunt Game',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.kn.bikestunt3.racing.driving.games&hl=en',
  },
  {
    name: 'City Gangster',
    description:
      'City Gangster is a Gangster Game',
    stack: ['Unity', 'C#'],
    sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.gzl.ropeherofuntimez',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Unity 3D',
  'C#',
  'Unreal',
  'C++',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhattijkd@gmail.com',
}

export { header, about, projects, skills, contact }
