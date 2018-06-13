import React, { Component} from 'react';

class ComponentProps extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = [];
    }

    Formatdate (date){
        // console.log(date)
        return date.toLocaleDateString();
    }
    
    render(){       
        return(
            <div>
                <h1> Component & props in react</h1>
                <Userinfo  user = {this.props.author} />
                <p> {this.props.text} </p>
                <p> Date: {this.Formatdate(this.props.date)} </p>
            </div>

        )
    }
}

class Userinfo extends Component{    
    render(){
        return(
            <div>
                <Avatar avatar = {this.props.user} />
                <h3>{this.props.user.name}</h3>
            </div>
        )
    }
}

class Avatar extends Component{
    render(){
        return(
            <img
                src={this.props.avatar.avatarUrl}
                alt = {this.props.avatar.name}
            />
        )
    }
}

export default ComponentProps;