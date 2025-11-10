import {
  Database,
  Key,
  Search,
  Shield,
  Mail,
  Zap,
  Code2,
  Layers,
  Upload,
  GitMergeIcon,
  LucideIcon,
} from 'lucide-react'
import { vars } from '.'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
  category: string
  badge?: string
}

export interface ComingSoonFeature {
  title: string
  link: string
}

export const features: Feature[] = [
  {
    icon: Database,
    title: 'Easy Installation & Setup',
    description: 'Docker-based deployment with simple docker-compose setup. Start your backend in minutes.',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'from-blue-50 to-indigo-50',
    category: 'Infrastructure',
  },
  {
    icon: Layers,
    title: 'Data Modeling',
    description: 'Create and manage entities with flexible primary keys, composite keys, and custom data types.',
    color: 'from-purple-500 to-pink-600',
    iconBg: 'from-purple-50 to-pink-50',
    category: 'Core',
  },
  {
    icon: Code2,
    title: 'Comprehensive REST API',
    description: 'Full CRUD operations with advanced filtering, pagination, and standardized JSON responses.',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'from-emerald-50 to-teal-50',
    category: 'API',
  },
  {
    icon: Key,
    title: 'Authentication System',
    description: 'User management with secure login/registration flow and access + refresh tokens.',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'from-amber-50 to-orange-50',
    category: 'Security',
  },
  {
    icon: Search,
    title: 'Advanced Search (BSH Search)',
    description: 'Logical and comparison filters with TypeScript type-safe query builder.',
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'from-cyan-50 to-blue-50',
    category: 'API',
  },
  {
    icon: Shield,
    title: 'Security & Access Control',
    description: 'RBAC roles, policies, entity-level permissions, API keys, and audit trails.',
    color: 'from-red-500 to-rose-600',
    iconBg: 'from-red-50 to-rose-50',
    category: 'Security',
  },
  {
    icon: Upload,
    title: 'File Management',
    description: 'Uploads, configurable storage, and file serving capabilities.',
    color: 'from-violet-500 to-purple-600',
    iconBg: 'from-violet-50 to-purple-50',
    category: 'Storage',
  },
  {
    icon: Mail,
    title: 'Email/Mailing System',
    description: 'Template-based email sending with configurable service integrations.',
    color: 'from-sky-500 to-cyan-600',
    iconBg: 'from-sky-50 to-cyan-50',
    category: 'Communication',
  },
  {
    icon: GitMergeIcon,
    title: 'Triggers',
    description: 'Event-driven automation with webhooks, conditional logic, and chaining.',
    color: 'from-fuchsia-500 to-pink-600',
    iconBg: 'from-fuchsia-50 to-pink-50',
    category: 'Automation',
    badge: 'Beta',
  },
  {
    icon: Zap,
    title: 'Developer Experience',
    description: 'Postman Collection, TypeScript SDK (planned), RESTful type-safe APIs, and full documentation.',
    color: 'from-yellow-500 to-amber-600',
    iconBg: 'from-yellow-50 to-amber-50',
    category: 'Tools',
  },
]

export const comingSoonFeatures: ComingSoonFeature[] = [
  {
    title: 'Api Keys',
    link: vars.bshEngineDocs + '/security/api-keys',
  },
  {
    title: 'Triggers',
    link: vars.bshEngineDocs + '/triggers',
  },
  {
    title: 'WebSocket Support',
    link: vars.bshEngineDocs + '/websocket',
  },
  {
    title: 'Caching',
    link: vars.bshEngineDocs + '/caching',
  },
  {
    title: 'Derived Entities',
    link: vars.bshEngineDocs + '/modeling/deriveds',
  },
  {
    title: 'Packaging',
    link: vars.bshEngineDocs + '/packaging',
  },
  {
    title: 'BSH Engine SDK',
    link: vars.bshEngineDocs + '/sdk',
  },
]

