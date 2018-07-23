

export class Idea {
  name: string;
  description: string;
  author: string;
  id: number;
  active: boolean;
  constructor(n: string, d: string, a: string, p?: number, active?: boolean  ) {
    this.name = n;
    this.description = d;
    this.author = a;
    this.id = p || 1; // defaul
    this.active = active || true; // default value
  }

  setId(p: number) {
    this.id = p;
  }
  getId() {
    return this.id;
  }
  activate() {
    this.active = true;
  }
  deactivate() {
    this.active = false;
  }
}

export const Mock_Ideas = [
  new Idea('movie', 'X-man is a good way to spend weekend', 'John'),
  new Idea('vacation', 'A trip to california ', 'Bill'),
  new Idea('games', 'playing beach soccer ', 'James'),
];


export const Idea_List = [
  new Idea('dinner', 'dinner at nearest bar', 'Stacy', 2, true),
  new Idea('riding', 'riding bicycle near nile river', 'Valad', 3, true),
  new Idea('coding', 'coding in the mountains', 'Zuck', 5, true),
  new Idea('creating', 'creating a new quantum computer', 'Jobz', 7, true)
];
