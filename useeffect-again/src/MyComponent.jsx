
/* useEffect() = React hook that tells React 
                 TO DO SOME CODE when: (pick one) 
                 the component re-renders
                 the component mounts
                 the state of value changes 
syntax 
useEffect(function, [dependencies]);
useEffect(() => {}) ===>>> runs  after re-render
useEffect(() => {}, [])  ===>>> runs only when the 
                                component mounts
useEffect(() => {}, [value])  ===>>> runs on mount + when 
                                     value changes */
import React, {useState, useEffect} from 'react';

 
function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }
    function substractCount() {
        setCount(c => c - 1);
    }
    
    function changeColor() {
        setColor( c => {if(count > 0) {
            c === "green"
        } else {
             c === "red"
        }});
    }
  return(
        <>
            <p style={{color: color}} > Count: {count} </p>
            <button  onClick={addCount}  > add </button>
            <button onClick={substractCount} > substract </button>
        </>
  );
}
export default MyComponent;




