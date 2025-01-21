export function capitalize<T extends string>(input: T): Capitalize<T> {
  return (input.charAt(0).toUpperCase() + input.slice(1)) as Capitalize<T>;
}
