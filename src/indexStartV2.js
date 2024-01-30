// Create a class called TTT

  /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */

        
        // Convert each function to a method
        // -   move it inside the class
        // -   remove the keyword function
        // -   add this to all of the variables that belong to the class
        // -   change var to let or const for local variables
        // -   add this to all method calls


        class TTT {
            constructor() {
                this.xIsNext = true;
                this.squares = Array(9).fill(null);
                this.winner = null;
                this.winningLine = [];
                this.lines = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ];
        
                
                var uiSquares = document.getElementsByName("square");
                for (var i = 0; i < uiSquares.length; i++) {
                    uiSquares[i].onclick = this.handleClick.bind(this, i);
                    
                // -   bind both this and i to handleClick
                //     -   this.handleClick.bind(this, i);
                
                    // console.log("clicked")
                }
        
                this.calculateWinner = this.calculateWinner.bind(this);
                this.highlightWinner = this.highlightWinner.bind(this);
                this.disableAll = this.disableAll.bind(this);
        // Init
                this.init();
            }
        
             /*
              
        
                CalculateWinner
                -   use destructuring assingment to assign values to
                    a b and c in one line
        
                HandleClick
                -   add a parameter i rather than getting i from this
                    -   this now refers to the class not the square
                -   remove the local variable i
                -   add a local variable to refer to the clicked square
                    -   remember that squares have an integer id 0 - 8
            */
        
            calculateWinner() {
                for (var i = 0; i < this.lines.length; i++) {
                    var [a, b, c] = this.lines[i];
                    if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
                        this.winner = this.squares[a];
                        this.winningLine = this.lines[i];
                        return true;
                    }
                }
        
                this.winner = null;
                this.winningLine = [];
                return false;
            }
        
            handleClick(i) {
                var player = this.xIsNext ? "X" : "O";
                this.xIsNext = !this.xIsNext;
        
                this.squares[i] = player;
                document.getElementById(i).innerHTML = player;
                document.getElementById(i).onclick = () => {};
        
                if (this.calculateWinner()) {
                    this.highlightWinner();
                    this.disableAll();
                } else {
                    document.getElementById("status").innerHTML = "Next Player " + player;
                }
            }
        
            highlightWinner() {
                document.getElementById("status").innerHTML = "Winner: " + this.winner;
                for (var i = 0; i < this.winningLine.length; i++) {
                    var square = document.getElementById(this.winningLine[i]);
                    square.classList.add("red");
                }
            }
        
            disableAll() {
                var uiSquares = document.getElementsByName("squares");
                for (var i = 0; i < uiSquares.length; i++)
                    uiSquares[i].onclick = () => {};
            }
        
            init() {
               
            }
        }
        
        
        // declare a variable ttt
        
        // add an onload handler to the window that assigns ttt to a TTT
        
        var ttt;
        
        window.onload = function () {
            ttt = new TTT();
        };
        
        
        
        
        
        
        
        
        
        
        
        
        
                  
                
              
        
        
           
        
        
        