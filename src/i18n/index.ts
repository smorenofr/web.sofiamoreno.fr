import fr from './fr';
import en from './en';

export const translations = { fr, en } as const;
export type Locale = keyof typeof translations;
