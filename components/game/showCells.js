export function showCells(cells) {
   let str = ''
   for (let i = 0; i < cells.length / 2; i++) {
      for (let j = 0; j < cells.length / 2; j++) {
         str += cells[j] + ' '
      }
      console.log(str)
      str = ''
   }
}
