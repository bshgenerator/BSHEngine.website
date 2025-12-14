import { vars } from "./index"

export interface Announcement {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  icon?: string
}

export const currentAnnouncement: Announcement = {
  id: '2',
  message: 'New release with new features and improvements!',
  linkText: 'V0.0.2 Release →',
  linkHref: vars.bshEngineDocs + '/changelog#002',
  icon: '🎉',
}