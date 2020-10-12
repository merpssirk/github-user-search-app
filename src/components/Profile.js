/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

  class Profile extends Component {
      
    render() {

       let data = this.props.data;
       let followers = `${data.htmlUrl}?tab=followers`;
       let following = `${data.htmlUrl}?tab=following`;
       let repos = `${data.htmlUrl}?tab=repositories`;

        return (
            
            <section className= "github-profile">
              <div className= "github-profile-info"  >
                  <a href={data.htmlUrl} target="_blank" title={data.name} >
                    <img src={data.avatar} alt={data.username} />    
                  </a>
                  <h2> <a href={data.htmlUrl} title={data.username} target="_blank" >{data.name  ||  data.username} </a></h2>
                  <h3>  {data.location || 'I live in my world'}</h3>
              </div>
              <div className="github-profile-state">
                  <ul>
                      <li>
                          <a href = {followers} target="_blank" >folowers</a>
                      </li>
                      <li>
                          <a href = {following} target="_blank" >folowing</a>
                      </li>
                      <li>
                          <a href = {repos} target="_blank" >Repositories</a>
                      </li>
                  </ul>
              </div>

            </section>
        )
    }
}

export default Profile
