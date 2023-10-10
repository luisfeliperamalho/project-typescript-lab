//classes

//data modifiers
    // public
    // private
    // protected

    class Character {
        private name?: string;
        readonly stregth: number;
        skill: number;
    
        constructor(name: string, stregth: number, skill: number) {
            this.name = name;
            this.stregth = stregth;
            this.skill = skill;
        }
    
        public attack() : void {
            console.log(`Attack with ${this.stregth} points`);
        }
    }
    
    //subclass
     class Magician extends Character {
        magicPoints : number;
    
        constructor(name: string, stregth: number, skill: number, magicPoints: number) {
            super(name, stregth, skill);
            this.magicPoints = magicPoints;
        }
     }
    
    const p1 = new Character("Coisa",10, 98);
    p1.attack();