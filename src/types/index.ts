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

