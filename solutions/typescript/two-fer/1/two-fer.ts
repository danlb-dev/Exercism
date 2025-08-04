export function twoFer(name:string): string {
  const person: string = name ? name : "you";
  return `One for ${person}, one for me.`;
}
