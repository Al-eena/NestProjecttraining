import React from "react";

class Sample1 extends React.Component {
  constructor(props: any) {
    super(props);
    
    this.state = {
      username: "",
    };   
    this.showme= this.showme.bind(this);
    this.ontextChange= this.ontextChange.bind(this); 
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

export default Sample1;