import React, { Component } from 'react';
import Profile from './components/Profile';
import SearchProfile from './components/SearchProfile';
import './App.css';

 class App extends Component {

  constructor(props) {

    super(props)
    
    this.API ='https://api.github.com/users';
    
    this.state = {

       username :'merpssirk',
       name:'',
       avatar:'',
       location:'',
       repos:'',
       followers:'',
       following:'',
       htmlUrl:'',
       notFound:''
       
    }
  }

  fetchProfile =(username)=>{

    let url = `${this.API}/${username}`;
    fetch(url)

      .then((res)=>{ return res.json()})

      .then((data)=>{

        console.log(data);

        this.setState({

          username:data.login,
          name:data.name,
          avatar:data.avatar_url,
          location:data.location,
          repos:data.public_repos,
          followers:data.followers,
          following : data.following,
          htmlUrl:data.html_url,
          notFound: data.message

        })
        
      })
      .catch((error) => console.log('Oops , There Is A Problem') )

  }
  componentDidMount(){
    this.fetchProfile(this.state.username);
  }
  
   render() {
    console.log(this.state);
    return (
      <div id="card">
        <SearchProfile  fetchProfile = {this.fetchProfile } />
        <Profile data={this.state} />
      </div>
    )
  }
}

export default App
