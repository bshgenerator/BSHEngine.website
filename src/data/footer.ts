import { vars } from "."
import { Linkedin, LucideIcon, Package } from "lucide-react"
import { Github } from "lucide-react"
import { Book } from "lucide-react"

export interface FooterLink {
    name: string
    links: {
        name: string
        href: string
        external?: boolean
    }[]
}

export interface SocialLink {
    name: string
    href: string
    icon: LucideIcon
    ariaLabel: string
}

export const footerLinks: FooterLink[] = [
    {
        name: 'Quick Links',
        links: [
            { name: 'Documentation', href: vars.bshEngineDocs, external: true },
            { name: 'API Reference', href: vars.bshEngineDocs + '/api', external: true },
            { name: 'Learn from Blogs', href: vars.documentation + '/blogs', external: true },
        ],
    },
    {
        name: 'Resources',
        links: [
            { name: 'GitHub', href: vars.github, external: true },
            { name: 'Docker Hub', href: vars.dockerHub, external: true },
            { name: 'Postman Collection', href: vars.postmanCollection, external: true },
        ],
    },
    {
        name: 'Let\'s Talk',
        links: [
            { name: 'About', href: vars.author, external: true },
            { name: 'Contact', href: vars.contact, external: true },
        ],
    },
]

export const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        href: vars.linkedin,
        icon: Linkedin,
        ariaLabel: 'LinkedIn',
    },
    {
        name: 'Documentation',
        href: vars.documentation,
        icon: Book,
        ariaLabel: 'Documentation',
    },
    {
        name: 'GitHub',
        href: vars.github,
        icon: Github,
        ariaLabel: 'GitHub',
    },
    {
        name: 'Docker',
        href: vars.dockerHub,
        icon: Package,
        ariaLabel: 'Docker',
    },
]

export const footerBrand = {
    name: 'BSH Engine',
    description: 'A powerful backend platform designed for developers who want to build APIs and data models effortlessly.',
    logo: '/logo.svg',
}

export const footerBottomLinks = {
    privacy: { name: 'Privacy Policy', href: '/privacy-policy' },
    terms: { name: 'Terms of Service', href: '/terms-of-service' },
    version: vars.version,
}
