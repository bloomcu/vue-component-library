export type Variant = 'primary' | 'subtle' | 'accent' | 'disabled'
export type Size = 'sm' | 'md' | 'lg'
export interface FeatureV9Item {
  image: string
  headerText: string
  href?: string
  action?: (...args: any) => any
  buttonVariant?: Variant
  buttonText: string
  description: string
}
export interface GlobalCodyButtonProps {
  buttonText: String;
  href?: String;
  target?: String
  variant?: Variant;
  size?: Size;
  icon?: Boolean;
  buttonClick?: (...args: any) => any;
}

export interface GlobalCtaLink {
  href?: String;
  target?: String
  text?: String;
}

export interface GlobalImage {
  src: String
  alt?: String
  class?: String
}

export interface GlobalBreakPointBlock {
  xs?: String | Number
  sm?: String | Number
  md?: String | Number
  lg?: String | Number
  xl?: String | Number
}

export type GlobalBreakPoint = keyof(GlobalBreakPointBlock)