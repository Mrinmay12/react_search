import logo from './logo.svg';
import './App.css';
import Qrcode from './Qrcode';
import QrReader from './QrRead2';
import TextEdite from './TextEdite';
import Post from './Post';
import Searchbar from './Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar/>
        {/* <TextEdite/> */}
        {/* <Post/> */}
        {/* <Qrcode/> */}
        {/* <QrReader/> */}
      </header>
    </div>
  );
}

export default App;
