export function isLeap(year: number): boolean {
  let isLeapYear: boolean = false;
  if(year%4==0 && year%100!==0){
    isLeapYear = true;
  }
  else if(year%4==0 && year%100==0 && year%400==0){
    isLeapYear = true;
  }
  return isLeapYear;
}
