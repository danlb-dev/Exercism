export class DnDCharacter {
  //character abilities
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  public hitpoints: number;

  constructor(){
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution); 
  }
  
  public static generateAbilityScore(): number {
    const diceChoices: number[] = [];
    
    let count = 0;
    while(count < 6){
      const randomNumber = Math.floor(Math.random()*6);
      diceChoices.push(randomNumber);
      count++;
    };

    diceChoices.sort((a, b) => b - a);
    const sum = diceChoices[0] + diceChoices[1] + diceChoices[2];

    return sum;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2);
  }
}
