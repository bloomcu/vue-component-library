export type ButtonVariant = 'primary' | 'subtle' | 'accent' | 'disabled'
export type ButtonSize = 'sm' | 'md' | 'lg'
export interface Block {
  component?: any
  uuid?: string
}
export interface FeatureV9Item {
  image: string
  headerText: string
  href?: string
  action?: (...args: any) => any
  buttonButtonVariant?: ButtonVariant
  buttonText: string
  description: string
}
export interface Button {
  href?: string;
  target?: string
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  text?: string
  modal?: string
  buttonClick?: (...args: any) => any;
}

export interface Link {
  href?: string;
  target?: string
  text?: string;
  block?: boolean
}


export interface Child {
  title?: string
  text?: string
  links: Link[]
}

export interface Dropdown {
  component: string
  children: Child[] | any
}
export interface NavbarLink extends Link, Button {
  uuid: string
  component: string
  dropdown?: Dropdown
}
export interface Logo {
  link: Link
  image: Image
}

export interface Image {
  src: string
  alt?: string
  class?: string
  title: string
  href?: string
}

export interface ContentComponent {
  label: string
  header: string
  subHeader: string
  button: Button
  ctaLink: Link
}

export interface BreakPointBlock {
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

export type BreakPoint = keyof(BreakPointBlock)