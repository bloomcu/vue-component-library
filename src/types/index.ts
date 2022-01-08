export type Variant = 'primary' | 'subtle' | 'accent' | 'disabled'
export type Size = 'sm' | 'md' | 'lg'
export interface Block {
  component?: any
  uuid?: string
}
export interface FeatureV9Item {
  image: string
  headerText: string
  href?: string
  action?: (...args: any) => any
  buttonVariant?: Variant
  buttonText: string
  description: string
}
export interface GlobalCodyButton {
  href?: string;
  target?: string
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  text?: string
  modal?: string
  buttonClick?: (...args: any) => any;
}

export interface GlobalCtaLink {
  href?: string;
  target?: string
  text?: string;
  block?: boolean
}


export interface GroupItem {
  title?: string
  links: GlobalCtaLink[]
}

export interface Dropdown {
  component: string
  children: GroupItem[] | any
}
export interface NavbarLink extends GlobalCtaLink, GlobalCodyButton {
  uuid: string
  component: string
  dropdown?: Dropdown
}
export interface Logo {
  link: GlobalCtaLink
  image: GlobalImage
}

export interface GlobalImage {
  src: string
  alt?: string
  class?: string
  title: string
  href?: string
}

export interface GlobalContentComponent {
  label: string
  header: string
  subHeader: string
  button: GlobalCodyButton
  ctaLink: GlobalCtaLink
}

export interface GlobalBreakPointBlock {
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

export type GlobalBreakPoint = keyof(GlobalBreakPointBlock)