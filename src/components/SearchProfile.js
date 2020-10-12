import React, { Component } from 'react'

export class SearchProfile extends Component {

    inputRef = React.createRef();

    handleSubmit =(e)=>{
        
        e.preventDefault();
        console.log('submit .. ');
        console.log(this.inputRef.current.value);
        const val = this.inputRef.current.value;        
        this.props.fetchProfile(val)
        this.inputRef.current.value = '';                
    }

    render() {

        return (

            <div className="search-box">
               <form onSubmit={this.handleSubmit} >
                   <input  ref={this.inputRef} type="text" placeholder="Type username + Enter"  />
               </form>
            </div>
        )
    }
}

export default SearchProfile
