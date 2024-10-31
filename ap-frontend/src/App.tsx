// // import {Header, Footer} from '../components/header.tsx'
// // import Footer from '../components/footer.tsx'
// import S from '../components/header.tsx'
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'

function App() {
  const name = "LMAO";
  const catName = ["1","2","3"];
  return (
    <>
      {/* <S.Header /> 
      <S.Footer /> */}
      <Header catname = {catName} />
      <h1>Header HELLO {name} </h1>
      <Footer />
      <h1>Footer HELLO {name} </h1>
    </>
  )
}

export default App
