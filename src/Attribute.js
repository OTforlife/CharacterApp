import React from 'react';
import './Attribute.css';

class Attribute extends React.Component{
    constructor(props){
        super(props)

        this.state= {input:3}
    }

    updateText=(event) => {
        var num = event.target.value;
        var parsenum = parseInt(num);

        if (!isNaN(parsenum) || num == '')
        {
            if (num == ''){
                this.setState({
                    input:0
                })
            }
            else
            {
                this.setState({
                    input: parseInt(event.target.value)
                })
            }
        }
        else
        {
            console.log("crap!")
        }


    }

    render(){
        return (<div className = 'attribute'><lable>{this.props.name}</lable><textarea onChange={this.updateText} value ={this.state.input}/>
        <p>Modifier: {Math.floor(((this.state.input) - 10) / 2)}</p>




        </div>
    );}
}


export default Attribute;