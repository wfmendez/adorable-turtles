import './App.css'

const Card = (props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

const App = () => {

  return (
    <>
      <Card name='a'></Card>
      <Card name='b'></Card>
      <Card name='c'></Card>
    </>
  )
}

export default App
