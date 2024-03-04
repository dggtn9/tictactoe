const TURNS = {
  X: 'X',
  o:'O'
}
const board = array(9).fill(null)
function App() {
return (<main className='board'>
  <h1>Tic tac Toe</h1>
  <section className='game'>
{
  board.map((_,index) => {
    return (
      <div className='cell' key={index}>
        <span className='cell_content'>
        {index}
        </span>
      </div>
    )
  }
  )
}
  </section>
  </main>
)}

export default App
