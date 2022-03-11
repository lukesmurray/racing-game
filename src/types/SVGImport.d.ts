/**
 * Allow untyped SVG imports
 */
declare module '*.SVG' {
  const value: string
  export default value
}
