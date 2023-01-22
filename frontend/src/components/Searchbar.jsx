import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import countries from '../utils/country';
import {useThrottle} from 'use-throttle'

const Searchbar = () => {
  
  const [inputText,setInputText] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [active,setActive] = useState(0);
  const scrollRef = useRef();

  const handleInput = (e) =>{
    setInputText(e.target.value)
  }
  const handleActiveSuggestion = (e) =>{
    // upArrow = 38
    // downArrow = 40
    // console.log(e.keyCode)
    switch(e.keyCode){
      case 38:
        if(active === 1){
          scrollRef.current.scrollTop = suggestion.length * 42.677;
          setActive(suggestion.length +1)
        }
        else if(active <= suggestion.length - 4){
          scrollRef.current.scrollTop -= 42.677;
        }
        setActive(prev =>prev -1 )
        break;
        case 40 :
          if(active === suggestion.length){
            scrollRef.current.scrollTop = 0;
            setActive(0)
          }
          else if(active >= 4){
            scrollRef.current.scrollTop += 42.677;
          }
          
            setActive(prev =>prev +1 )
          
          
          break;
          default :return;
    }
  }
  const throttledText = useThrottle(inputText, 1500)
  useEffect(()=>{
if(throttledText == ""){
  setSuggestion([])
}else{
  let query = throttledText.toLowerCase()
  // work for both capital and small letter 
  let newSuggestion = countries.filter(item=>{
    return item.country.toLowerCase().trim().indexOf(query) !== -1 ? true : false;
  }).map(item =>item.country)
  // console.log(newSuggestion)
  setSuggestion(newSuggestion)
}
  },[throttledText])
  // console.log(inputText)
  return (
    <Wrapper onKeyUp = {handleActiveSuggestion}>
<SearchBarWrapper>
  <Input value = {inputText} onChange = {handleInput}/>
</SearchBarWrapper>
<SuggestionWrapper len = {5} active = {active} ref = {scrollRef}>
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