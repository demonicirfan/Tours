<h1>UseEffect Hook ⚡</h1>
 
  UseEffect is a hook for encapsulating code that has 'side effects', if youre familiar with React class lifecycle methods, you can think of useEffect Hook sa componentDidMount, componentDidUpdate and conponentWillUnmount combinded.

  EX:- 
```
import React, {useEffect} from 'react
useEffect(function)
useEffect(function, Array)
```

 - *The function passed to useEffect will run after the render is committed to the screen*
 - *Second srgument to useEffect that is the array of values that the effect depends on.*

> **_NOTE:_**  you can call useEffect as many times as you want

```
useEffect(()=>{
    console.log("hello useEffect")
})
useEffect(()=>{
    console.log("hello useEffect")
}, [count])
```

**What does useEffect do ?**
   
   By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates. In this effect, we set the document title, we could also perform data fetching or call some other imperative API.

**Why is useEffect called inside a Component ?**
   
   placing use effect inside the component lets us access the state variable or any props right form the effect.

**Does useEffect run after every Render ?**
    
  Yes! By default, it runs both after the first render and after every update.