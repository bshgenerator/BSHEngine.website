import { vars } from "."

export interface FooterLink {
    name: string
    href: string
    external?: boolean
}

export interface FooterLinks {
    product: FooterLink[]
    resources: FooterLink[]
    company: FooterLink[]
}

export interface SocialLink {
    name: string
    href: string
    icon: string
    ariaLabel: string
}

export const footerLinks: FooterLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Documentation', href: vars.bshEngineDocs, external: true },
        { name: 'API Reference', href: vars.bshEngineDocs + '/api', external: true },
        { name: 'Quick Start', href: vars.bshEngineDocs + '/installation' },
    ],
    resources: [
        { name: 'GitHub', href: vars.github, external: true },
        { name: 'Docker Hub', href: vars.dockerHub, external: true },
        { name: 'Postman Collection', href: vars.postmanCollection, external: true },
        { name: 'TypeScript SDK', href: vars.bshEngineDocs + '/sdk', external: true },
    ],
    company: [
        { name: 'About', href: vars.author, external: true },
        { name: 'Blog', href: vars.bshEngineDocs + '/blog', external: true },
        { name: 'Contact', href: vars.contact, external: true },
    ],
}

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        href: vars.github,
        icon: 'github',
        ariaLabel: 'GitHub',
    },
    {
        name: 'Documentation',
        href: vars.documentation,
        icon: 'book',
        ariaLabel: 'Documentation',
    },
    {
        name: 'Contact',
        href: vars.contact,
        icon: 'mail',
        ariaLabel: 'Contact',
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
