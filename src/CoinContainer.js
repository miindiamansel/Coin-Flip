import React,{Component} from "react";
import Coin from "./Coin";
import{choice} from "./Helper"
import "./coin.css"

class CoinContainer extends Component{
    static defaultProps={
        coins:[
            {side:"heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side:"tails", imgSrc:"https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"}
        ]
    }
    constructor(props){
        super(props)
        this.state={
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        };
        this.handleClick=this.handleClick.bind(this)
    }
    flipCoin(){
        const newCoin=choice(this.props.coins);
        this.setState(str=>{
        return{
            currCoin:newCoin,
            nFlips:str.nFlips+1,
            nHeads:str.nFlips+(newCoin.side==="heads"?1:0),
            nTails:str.nTails+(newCoin.side==="tails"?1:0)
        }
    })
}
handleClick(e){
    this.flipCoin()
}
render(){
    return(
        <div className="CoinContainer">
            <h2>Lets Flip A Coin!</h2>
            {/* state updates what is on the page for the user */}
            {this.state.currCoin&&<Coin info={this.state.currCoin}/>} 
            <button onClick={this.handleClick} className="Button">Click Me!</button>
            <p>Out of {this.state.nFlips} flips, their have been {this.state.nHeads} and {this.state.nTails} tails.</p>
        </div>
    )
}
}
export default CoinContainer