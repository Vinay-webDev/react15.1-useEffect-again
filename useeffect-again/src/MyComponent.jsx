
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
    
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

  return(
        <>
            <p> Count: {count} </p>
            <button onClick={addCount} > add </button>
        </>
  );
}
export default MyComponent;




