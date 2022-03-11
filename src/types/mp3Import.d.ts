/**
 * Allow untyped mp3 imports
 */
declare module '*.mp3' {
  const value: any
  export default value
}
