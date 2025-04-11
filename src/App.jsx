import LangSwitcher from "./component/LangSwitcher/LangSwitcher";
import LoginForm from "./component/LoginForm/LoginForm";
import SearchBar from "./component/SearchBar/SearchBar";
import React, { useState } from 'react';
import SelectCoffeeSize from "./component/SelectCoffeeSize/SelectCoffeeSize";
import CheckBox from "./component/CheckBox/CheckBox";



const App = () => {
    const handleLogin = (userData) => {
      console.log(userData);
    };
  
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
 
  

  return (
    <>
      <h1>Please login to your account!</h1>      
      <LoginForm onLogin={handleLogin} />
      <h2>Контрольовані елементи</h2>
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <h2>"""""Радіо-кнопка"""""</h2>
      <SelectCoffeeSize checked={coffeeSize} onChange={setCoffeeSize} />
      <h2>CheckBox</h2>
      <CheckBox  />
      
    </>
  );
};

export default App;