import React from 'react';

class Attribute extends React.Component{
    constructor(props){
        super(props)

        this.state= {input:''}
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
        return (<div><textarea onChange={this.updateText} value ={this.state.input}/>
        <p>{Math.floor(((this.state.input) - 10) / 2)}</p>



        </div>
    );}
}


export default Attribute;