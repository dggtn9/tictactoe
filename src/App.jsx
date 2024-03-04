const TURNS = {
  X: 'X',
  o:'O'
}

const Square = ({children,updateboard,index})
return(
  <div className="square">
    {children}
  </div>
)


function App() {
const [board, setBoard] = useState(Array(9)).fill(null)
const [turn, setTurn] = useState(TURNS.X)
return (
<main className="board">
  <h1>Tic tac Toe</h1>
  <section className="game">
{
  board.map((_ ,index) => {
    return (
      <Square  
      key={index}
      index={index}
      >
        </Square>
  
  )
})
}

  </section>
  </main>
)}

export default App
