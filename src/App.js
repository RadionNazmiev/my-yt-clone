import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Feed, ChannelDetail,VideoDetail,SearchFeed, NavBar} from "./components";
import {Box} from "@mui/material"


function App() {
  return (
    <BrowserRouter> 
      <Box sx={{backgroundColor: '#000'}}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
