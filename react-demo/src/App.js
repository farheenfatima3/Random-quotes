import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Game"
    }

    this.newQuote = this.newQuote.bind(this)

  }
  newQuote() {
    this.setState({
      input: Math.floor(Math.random() * 20)

    })
console.log(this.state.input)
  }

  render() {
    const quotesAll = [ 
   
      <p> Remember that not getting what you want is sometimes a wonderful stroke of luck.
    <span>- Dalai Lama</span > </p>,
      <p> Certain things catch your eye, but pursue only those that capture the heart. 
      <span>- Ancient Indian Proverb</span> </p>, 
      <p> An unexamined life is not worth living. 
      <span>- Socrates</span></p>, 
      <p> Everything you’ ve ever wanted is on the other side of fear. 
      <span>- George Addair</span></p>, 
      <p> Whatever you can do, or dream you can, begin it.Boldness has genius, power and magic in it. 
      <span>- Johann Wolfgang von Goethe</span></p>, 
      <p> Challenges are what make life interesting and overcoming them is what makes life meaningful. 
      <span>- Joshua J. Marine</span></p>, 
      <p> When I let go of what I am, I become what I might be. 
      <span>- Lao Tzu</span></p>, 
      <p> You may be disappointed if you fail, but you are doomed if you don’ t try. 
      <span>- Beverly Sills</span></p>, 
      <p> Whether you think you can or you think you can’ t, you’ re right.
      <span>- Henry Ford</span></p>, 
      <p> It’ s not the years in your life that count.It’ s the life in your years. 
      <span> - Abraham Lincoln</span></p>, 
      <p> Nothing is impossible, the word itself says, “I’ m possible!”
      <span>- Audrey Hepburn </span> </p>, 
      <p> Life isn’ t about getting and having, it’ s about giving and being. 
      <span>- Kevin Kruse </span></p>, 
      <p> Fall seven times and stand up eight. 
      <span>- Japanese Proverb </span></p>, 
      <p> Believe you can and you’ re halfway there. 
      <span> - Theodore Roosevelt</span></p>, 
      <p> Definiteness of purpose is the starting point of all achievement. 
      <span> - W. Clement Stone</span></p>
    
    ]

    return ( 
      <div className = "check" >
        <div className = "quotes" >
          <h1> {this.state.input < quotesAll.length ? quotesAll[this.state.input] : quotesAll[Math.floor(Math.random() * 3)]} </h1> 
         </div> 
        <div className = "buttons" >
          <Newfunction inputValue = {this.state.input} fun={this.newQuote}/>
         </div>
      </div>
    )
  }
}

function Newfunction(props) {
  const handleChange = () => {
    const colors = ["#D1D5DB", "#FCA5A5", "#FBBF24","#6EE7B7","#1D4ED8","#312E81","#F472B6","#064E3B","#DC2626","#059669","#92400E","#D1FAE5","#4C1D95","#059669"]
    document.getElementById("btn").style.backgroundColor=colors[props.inputValue]
    document.querySelector("body").style.backgroundColor = colors[props.inputValue]
    document.querySelector("body").style.color = colors[props.inputValue]
  }

  function Wrapper() {
    
    props.fun();
    handleChange()
  }
  return ( 
    <div>
     
    <button id="btn" onClick = {Wrapper}> New Quote </button>
    </div>

  )
}

export default App;