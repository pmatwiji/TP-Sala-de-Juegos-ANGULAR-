import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent implements OnInit {

  constructor() { }
  jugando:boolean = false;
  

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.querySelector('.tablero');
      let squares = Array.from(document.querySelectorAll('.tablero div'));
      const scoreDisplay = document.querySelector('#score');
      const startBtn = document.querySelector('#start-button');
      const width = 10;
      let nextRandom = 0;
      let timerId
      let score:any = 0;
      const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
      ]


      //formas
      const lTetromino = [
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
      ]
      const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

      const tetrominoes = [lTetromino,zTetromino,oTetromino,iTetromino,tTetromino];

      let currentPosition = 4;
      let currentRotation = 0;

      //seleccionar forma random
      let random = Math.floor(Math.random()*tetrominoes.length)

      let current = tetrominoes[random][currentRotation];

      function draw(){
        current.forEach(index =>{
          squares[currentPosition + index].classList.add('tetrominoes');
          (<HTMLElement>squares[currentPosition + index]).style.backgroundColor = colors[random];
        })
      }

      function undraw() {
        current.forEach(index =>{
          squares[currentPosition + index].classList.remove('tetrominoes');
          (<HTMLElement>squares[currentPosition + index]).style.backgroundColor = '';
        })
      }

      //bajar automaticamente
      draw();
      //var timerId = setInterval(moveDown,1000);

      //controles
      function control(e){
        if(e.keyCode === 37){
          moveLeft();
        } else if (e.keyCode === 38) {
          rotate()
        } else if (e.keyCode === 39) {
          moveRight()
        } else if (e.keyCode === 40) {
          moveDown()
        }
      }

      document.addEventListener('keydown',control);

      function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();
      }

      //congelar
      function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
          current.forEach(index => squares[currentPosition + index].classList.add('taken'));
          //mostrar nuevo
          random = nextRandom;
          nextRandom = Math.floor(Math.random()*tetrominoes.length);
          current = tetrominoes[random][currentRotation];
          currentPosition = 4;
          draw();
          displayShape();
          addScore();
          gameOver();
        }
      }

      //limitar bordes con el movimiento
      function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isAtLeftEdge){
          currentPosition -= 1
        }

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
          currentPosition += 1
        }

        draw();
      }

      function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
        if(!isAtRightEdge) {
          currentPosition +=1
        }
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
          currentPosition -=1
        }
        draw()
      }

      //rotar
      function rotate() {
        undraw()
        currentRotation ++
        if(currentRotation === current.length) { //si llega a 4, vuelve a la rotacion 0
          currentRotation = 0
        }
        current = tetrominoes[random][currentRotation]
        //checkRotatedPosition()
        draw()
      }

      //mostrar proximo
      const displaySquares = document.querySelectorAll('.mini-grid div');
      const displayWidth = 4;
      let displayIndex = 0;
      

      const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
      ]

      function displayShape() {
        displaySquares.forEach(square => {
          square.classList.remove('tetrominoes');
          (<HTMLElement>square).style.backgroundColor = '';
        })
        upNextTetrominoes[nextRandom].forEach(index => {
          displaySquares[displayIndex + index].classList.add('tetrominoes');
          
        })
      }

      //comenzar
      startBtn.addEventListener('click', () => {
        if (timerId) {
          clearInterval(timerId)
          timerId = null
        } else {
          draw()
          timerId = setInterval(moveDown, 1000)
          nextRandom = Math.floor(Math.random()*tetrominoes.length)
          displayShape()
          this.jugando=true;
        }
      })

      //puntaje

      function addScore() {
        for (let i = 0; i < 199; i +=width) {
          const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
    
          if(row.every(index => squares[index].classList.contains('taken'))) {
            score +=1;
            scoreDisplay.innerHTML = score;
            row.forEach(index => {
              squares[index].classList.remove('taken');
              squares[index].classList.remove('tetrominoes');
              (<HTMLElement>squares[index]).style.backgroundColor = ''
            })
            const squaresRemoved = squares.splice(i, width)
            squares = squaresRemoved.concat(squares)
            squares.forEach(cell => grid.appendChild(cell))
            //console.log(squaresRemoved);
          }
        }
      }

      //game over

      function gameOver(){
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
          //scoreDisplay.innerHTML = ''
          clearInterval(timerId);
        }
      }




    })
  }

  

}
