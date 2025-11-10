import { vars } from "./index"

export interface Announcement {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  icon?: string
}

export const currentAnnouncement: Announcement = {
    id: '1',
    message: 'We are glad to announce that BSH Engine is now available for public usage!',
    linkText: 'Learn more →',
    linkHref: vars.bshEngineDocs,
    icon: '🎉',
  }

