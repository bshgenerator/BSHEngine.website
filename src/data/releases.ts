import { vars } from './index'

export interface ReleaseNote {
  type: 'feature' | 'improvement' | 'bugfix' | 'breaking'
  description: string
  links?: Array<{
    text: string
    url: string
  }>
}

export interface Release {
  version: string
  date: string
  title: string
  description: string
  notes: ReleaseNote[]
  highlights?: string[]
}

export const releases: Release[] = [
  {
    version: 'v0.0.2',
    date: '2025-12-14',
    title: 'API Keys, User Management & Enhanced Features',
    description: 'This release introduces API Keys system, user update functionality, registration, engine settings, and significant improvements to the dashboard and overall performance.',
    notes: [
      { 
        type: 'feature', 
        description: 'Introduce the API Keys system',
        links: [
          { text: 'API', url: `${vars.bshEngineDocs}/api/api-keys` },
          { text: 'UI', url: `${vars.bshEngineDocs}/security/api-keys` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Add User Update',
        links: [
          { text: 'API', url: `${vars.bshEngineDocs}/api/users/update-profile` },
          { text: 'UI', url: `${vars.bshEngineDocs}/security/users#update-user` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Implement Register',
        links: [
          { text: 'API', url: `${vars.bshEngineDocs}/api/authentication/register` },
          { text: 'UI', url: `${vars.bshEngineDocs}/auth/register` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Introduce Engine Settings',
        links: [
          { text: 'API', url: `${vars.bshEngineDocs}/api/settings` },
          { text: 'UI', url: `${vars.bshEngineDocs}/settings` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Powered GET requests with search by query parameters',
        links: [
          { text: 'Docs', url: `${vars.bshEngineDocs}/api/entities/search-entities-by-query` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Add count endpoints to the API',
        links: [
          { text: 'API 1', url: `${vars.bshEngineDocs}/api/entities/count-entities` },
          { text: 'API 2', url: `${vars.bshEngineDocs}/api/entities/count-filtered-entities` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Implement TS SDK for quick access to Engine APIs',
        links: [
          { text: 'SDK', url: `${vars.bshEngineDocs}/sdk` }
        ]
      },
      { 
        type: 'feature', 
        description: 'Update Pagination to be 1-based'
      },
      { 
        type: 'improvement', 
        description: 'Use new TS library in the dashboard to consume the Engine APIs'
      },
      { 
        type: 'improvement', 
        description: 'Improvements in the Dashboard UI/UX'
      },
      { 
        type: 'improvement', 
        description: 'Security improvements'
      },
      { 
        type: 'improvement', 
        description: 'Internal caching improvements'
      },
      { 
        type: 'improvement', 
        description: 'Fix bugs and improve performance'
      }
    ]
  },
  {
    version: 'v0.0.1',
    date: '2025-11-01',
    title: 'Initial Release',
    description: 'The first stable release of BSH Engine with core functionality including authentication, modeling, security, file management, mailing, and comprehensive API documentation.',
    notes: [
      { type: 'feature', description: 'Authentication: Login, Forgot Password, Activate Account' },
      { type: 'feature', description: 'Modeling: Entities, Types, Schemas' },
      { type: 'feature', description: 'Security: Users, Roles, Policies' },
      { type: 'feature', description: 'Files: Configurations, Load File' },
      { type: 'feature', description: 'Mailing: Configurations, Email Templates, Send Email' },
      { type: 'feature', description: 'Search module' },
      { type: 'feature', description: 'Api Documentations' }
    ]
  }
]

