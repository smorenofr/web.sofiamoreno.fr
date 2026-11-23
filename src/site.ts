import { I18N } from 'site-config';
import type { ButtonProps } from '@alfadormx/blocks/types/button';
import type { ContainerProps } from '@alfadormx/blocks/types/container';
import type { HeadlineProps } from '@alfadormx/blocks/types/headline';
import type { NavigationTreeItem } from '@alfadormx/blocks/types/navigationtree';

type Language = (typeof I18N.languages)[number];
type HomeCopy = AstroBlocks.CopyRegistry['home'];

export const EMAIL = 'mailto:contact@sofiamoreno.fr';
export const FORM_URL =
  'https://beautiful-radar-d8c.notion.site/237e05212921801cb353e2886bb57c89?pvs=105';

export const SOCIALS: ButtonProps[] = [
  {
    icon: { name: 'tabler:brand-instagram' },
    href: 'https://www.instagram.com/sofiamoreno_paris/',
    target: '_blank',
    'aria-label': 'Instagram',
  },
  {
    icon: { name: 'tabler:brand-facebook' },
    href: 'https://www.facebook.com/people/Sofia-Moreno/61576862935670/',
    target: '_blank',
    'aria-label': 'Facebook',
  },
  {
    icon: { name: 'tabler:brand-linkedin' },
    href: 'https://www.linkedin.com/in/sofiaku/',
    target: '_blank',
    'aria-label': 'LinkedIn',
  },
];

/** Small spaced monospace capitals, the eyebrow above every section title. */
export const MONO_LABEL = 'font-mono text-[0.7rem] font-normal uppercase tracking-[0.22em]';

/** Section heading: mono eyebrow, light serif display title. */
export const SECTION_HEADLINE: HeadlineProps = {
  align: 'left',
  class: 'mt-0 mb-10 md:mb-16 space-y-4',
  taglineClass: `${MONO_LABEL} text-brown`,
  titleClass:
    'font-title font-light tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-0 text-normal',
  subtitleClass: 'text-lg md:text-xl text-muted max-w-2xl',
};

/** Section rhythm: generous vertical air and a hairline above. */
export const SECTION: ContainerProps = {
  spacing: { padding: 'py-24 md:py-32 lg:py-40 px-6 lg:px-10' },
  border: { width: 'border-t', color: 'border-border' },
};

/** Square outlined button with mono capitals, as in the reference CTA. */
export const OUTLINE_BUTTON: Partial<ButtonProps> = {
  variant: 'outline',
  shape: 'square',
  size: 'lg',
  class: `${MONO_LABEL} px-8 py-4`,
};

/** Body copy: relaxed leading, spaced paragraphs. */
export const PROSE_TEXT =
  'text-[1.05rem] leading-relaxed text-normal [&_p]:mb-5 [&_strong]:font-semibold';

/** Prose column with a readable measure. */
export const PROSE = `max-w-xl ${PROSE_TEXT}`;

export function homeUrl(langCode: string): string {
  const lang = I18N.languages.find((l: Language) => l.code === langCode);
  return lang && lang.basePath !== '/' ? lang.basePath : '/';
}

export function sectionNav(nav: HomeCopy['nav']): NavigationTreeItem[] {
  return Object.values(nav.sections).map(({ id, label }) => ({ label, href: `#${id}` }));
}
