/**
 * Allow untyped glb imports
 */
declare module '*.glb' {
  const value: any
  export default value
}
