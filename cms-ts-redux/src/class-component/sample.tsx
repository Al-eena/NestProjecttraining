import axios from "axios";
import React from "react";

class Sample extends React.Component {
  constructor(props: any) {
    super(props);
    
    this.state = {
      username: "",
    };   
    this.showme= this.showme.bind(this);
    this.ontextChange= this.ontextChange.bind(this); 
  }

  componentDidMount(): void {
    axios.get("http://localhost:5000/course")
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    // origial . changes
  }
  componentWillUnmount(): void {
    
  }

  // text change 
  ontextChange(event:any){
    if(event?.target.name=="username")
    {
      this.setState({
        "username":event.target.value
        
      })
    }

  }
  // onc click event
  showme(){
    console.log(this.state);
    
  }
  render(): React.ReactNode {
    return <>
    <div>
      <input type="text" name="username" onChange={this.ontextChange}></input>
      <button onClick={this.showme}>Save</button>
    </div>
    </>;
  }
}

export default Sample;