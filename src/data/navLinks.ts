import { vars } from "."

export interface NavLink {
  name: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'Quick Start', href: '#quick-start' },
  { name: 'Releases', href: '/releases' },
  { name: 'Docs', href: vars.bshEngineDocs, external: true },
]

export const getStartedLink = vars.bshEngineDocs + '/installation'
