class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentSymbol = 'x';
        this.previousSymbol = 'o';
        this.winner = null;
        this.occupiedCells = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(row, col) {
        if (this.field[row][col] != null) return this.currentSymbol;
        if (this.field[row][col] == null) this.field[row][col] = this.currentSymbol;
        this.getWinner();
        if (this.currentSymbol === 'x') {
            this.currentSymbol = 'o';
            this.previousSymbol = 'x';
            this.occupiedCells ++;
            return this.currentSymbol;
        } 
        else {
            this.currentSymbol = 'x';   
            this.previousSymbol = 'o';
            this.occupiedCells ++;
            return this.currentSymbol;
        }
    }

    isFinished() {
        if (this.winner != null) return true;
        if (this.occupiedCells === 9) return true;
        else return false;
    }

    getWinner() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if(this.field[row][0] == this.field[row][1] && this.field[row][0] == this.field[row][2] && this.field[row][0] !=null && this.field[row][1] !=null && this.field[row][0] !=null) this.winner = this.field[row][0];
                if(this.field[0][col] == this.field[1][col] && this.field[0][col] == this.field[2][col] && this.field[0][col] !=null && this.field[1][col] !=null && this.field[1][col] !=null) this.winner = this.field[0][col];
                if(this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[0][0] !=null && this.field[1][1] !=null && this.field[2][2] !=null) this.winner = this.field[1][1];
                if(this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2] && this.field[2][0] !=null && this.field[1][1] !=null && this.field[0][2] !=null) this.winner = this.field[1][1];
            }
        }
        return this.winner;
    }

    noMoreTurns() {
       if(this.occupiedCells === 9) return true;
       else return false;
    }

    isDraw() {
        if(this.isFinished() == false || this.winner != null) return false;
        else return true;
    }

    getFieldValue(row, col) {
        return this.field[row][col];
    }
}

module.exports = TicTacToe;