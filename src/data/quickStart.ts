import { Terminal, ArrowRight, Book, Github, Package, LucideIcon } from 'lucide-react'
import { vars } from '.'

export interface QuickStartStep {
  number: string
  title: string
  description: string
  code: string
  icon: LucideIcon
  gradient: string
  iconBg: string
}

export interface QuickStartResource {
  name: string
  icon: LucideIcon
  href: string
}

export const quickStartSteps: QuickStartStep[] = [
  {
    number: '01',
    title: 'Pull Docker Image',
    description: 'Get the latest BSH Engine image from Docker Hub',
    code: 'docker pull bshg/engine:latest',
    icon: Package,
    gradient: 'from-blue-500 to-indigo-600',
    iconBg: 'from-blue-50 to-indigo-50',
  },
  {
    number: '02',
    title: 'Configure & Run',
    description: 'Set up your environment variables and start the container',
    code: 'docker-compose up -d',
    icon: Terminal,
    gradient: 'from-purple-500 to-pink-600',
    iconBg: 'from-purple-50 to-pink-50',
  },
  {
    number: '03',
    title: 'Start Building',
    description: 'Access the API at localhost:7071 and begin creating entities',
    code: 'curl http://localhost:7071/',
    icon: ArrowRight,
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'from-emerald-50 to-teal-50',
  },
]

export const quickStartResources: QuickStartResource[] = [
  { name: 'Documentation', icon: Book, href: vars.bshEngineDocs },
  { name: 'GitHub Repository', icon: Github, href: vars.github },
  { name: 'Docker Hub', icon: Package, href: vars.dockerHub },
]

export const quickStartCTA = {
  title: 'Ready to Build?',
  description: 'Join developers who are already building faster with BSH Engine',
  primaryButton: {
    text: 'View Documentation',
    href: vars.bshEngineDocs,
  },
  secondaryButton: {
    text: 'View on GitHub',
    href: vars.github,
  },
}

