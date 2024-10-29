import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shread';
  tower = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  moves: number[] = [];
  confirmReset = false;
  towerFalls = false;

  rollDie() {
    const result = Math.floor(Math.random() * (19 - 0 + 1) + 0);
    this.pullBlock(result);
  }

  undo() {
    const move = this.moves.pop() as number;
    if (move !== -1) {
      for (let i = this.tower[move].length; i >= 0; i--) {
        if (this.tower[move][i] === 0) {
          this.tower[move][i] = 1;
          break;
        }
      }
    }
    this.towerFalls = false;
  }

  reset() {
    for (const row of this.tower) {
      for (let i = 0; i < row.length; i++) {
        row[i] = 1;
      }
    }
    this.moves = [];
    this.confirmReset = false;
    this.towerFalls = false;
  }

  manual(result: string): boolean {
    if (Number(result) >= 1 && Number(result) <= 20) {
      this.pullBlock(20 - Number(result));
    }
    return false;
  }

  sacrifice() {
    this.moves.push(-1);
    this.collapseTower();
  }

  private collapseTower() {
    this.towerFalls = true;
  }

  private pullBlock(result: number) {
    for (let i = 0; i < this.tower[result].length; i++) {
      if (this.tower[result][i] === 1) {
        this.tower[result][i] = 0;
        break;
      }
    }
    if (this.tower[result][4] === 0) {
      this.collapseTower();
    } 
    this.moves.push(result);
  }
}
