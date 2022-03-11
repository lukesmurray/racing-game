/**
 * Allow untyped hdr imports
 */
declare module '*.hdr' {
  const value: any
  export default value
}
