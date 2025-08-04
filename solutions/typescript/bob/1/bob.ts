export function hey(message: string): string {
  const messageToCheck: string = message.trim();
  if(messageToCheck == "") return "Fine. Be that way!";

  let isYelling: boolean = false;
  if((messageToCheck.match(/[a-zA-Z]/) != null) && 
     messageToCheck == messageToCheck.toUpperCase()){
    isYelling = true;
  }

  let response: string = "";
  if(messageToCheck.endsWith("?")){
    response = isYelling ? "Calm down, I know what I'm doing!":"Sure.";
  }
  else {
    response = isYelling ? "Whoa, chill out!":"Whatever.";
  }
  
  return response;
}