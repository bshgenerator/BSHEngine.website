export interface Announcement {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  icon?: string
}

export const currentAnnouncement: Announcement = {
    id: '1',
    message: 'We are glad to announce that BSH Engine is now available!',
    linkText: 'Learn more →',
    linkHref: 'https://docs.bousalih.com/docs/bsh-engine',
    icon: '🎉',
  }

