import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import countries from '../utils/country';

const Searchbar = () => {
  const [inputText,setInputText] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [active,setActive] = useState(0);
  const handleInput = (e) =>{
    setInputText(e.target.value)
  }
  const handleActiveSuggestion = (e) =>{
    // upArrow = 38
    // downArrow = 40
    // console.log(e.keyCode)
    switch(e.keyCode){
      case 38:
        setActive(prev =>prev -1 )
        break;
        case 40 :
          setActive(prev =>prev +1 )
          break;
          default :return;
    }
  }
  useEffect(()=>{
if(inputText == ""){
  setSuggestion([])
}else{
  let query = inputText.toLowerCase()
  // work for both capital and small letter 
  let newSuggestion = countries.filter(item=>{
    return item.country.toLowerCase().trim().indexOf(query) !== -1 ? true : false;
  }).map(item =>item.country)
  // console.log(newSuggestion)
  setSuggestion(newSuggestion)
}
  },[inputText])
  // console.log(inputText)
  return (
    <Wrapper onKeyUp = {handleActiveSuggestion}>
<SearchBarWrapper>
  <Input value = {inputText} onChange = {handleInput}/>
</SearchBarWrapper>
<SuggestionWrapper len = {5} active = {active}>
  {suggestion.map((item,index)=>{
    return (
      <div key = {index} onMouseOver={()=>setActive(index + 1)}>
        {item}
      </div>
    )
  })}
</SuggestionWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
max-width:400px;
margin:auto;
`
const SearchBarWrapper = styled.div`
border:1px solid red;
display:flex;
padding:5px 10px;
align-item:center;
`
const Input = styled.input`
color:black;
border:none;
outline:none;
width:400px;
font-size:20px;
flex:1;
`
const SuggestionWrapper = styled.div`
border:none;
outline:none;
color:black;
padding:0 10px ;
display:flex;
flex-direction:column;
max-height:${({len})=>`${len * 42.677}px`};
margin:auto;
overflow:auto;
& * {
  flex:1;
  text-align:left;
  padding:8px;
}
& :nth-child(${({active})=>active}){
  background:rgba(0, 0, 0, 0.2);
  cursor:ponter;
}
`
export default Searchbar;