import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookFacilityPage from "./pages/BookFacilityPage/BookFacilityPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookFacilityPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
