import React, { Component } from 'react';
import api from '../services/api'
import io from 'socket.io-client'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import liked from '../assets/liked.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

//let cliques = 0;
class Feed extends Component {
    state = {
        feed: [],
        cliques: 0,
    };
    async componentDidMount(){
        this.registerToScoket()
        const response = await api.get('posts');

        this.setState({feed: response.data })
    }

    registerToScoket = () => {
        const socket = io('http://192.168.2.13:3030');

        // post, like

        socket.on('post', newPost => {
            // coloca o newPost no primeiro campo do array, e copia o resto 
            this.setState({ feed: [newPost, ...this.state.feed]})
        })

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                    )
            })
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }

    doubleTapLike = id => {
        // soma mais 1 clique e verifica se já foi dado 2
        this.setState({ cliques : this.state.cliques + 1 }, () => {
            // caso tenha mais de 1 clique no intervalo de 500 ms, é feito 1 clique no post
            if(this.state.cliques>1){
                api.post(`/posts/${id}/like`);
            }
        })
        // limita o tempo para 2 cliques antes de zerar em 500 milissegundos
        window.setTimeout(() => {
            this.setState({ cliques : 0 })
        },500)
        
    }
    render(){
        return(
           <section id="post-list">
               {this.state.feed.map( (post) => (
                   <article key={post._id}>
                   <header>
                       <div className="user-info">
                           <span> {post.author} </span>
                           <span className="place">{post.place}</span>
                       </div>
                       <img src={more} alt="Mais" />

                   </header>
                   <div id="postClick" onClick={() => this.doubleTapLike(post._id)}>
                        <img style={{ 'width': '100%' }} src={`http://192.168.2.13:3030/files/${post.image}`} alt=""></img>
                    </div>
                   <footer>
                       <div className="actions">
                           <button type="button" onClick={() => this.handleLike(post._id)}>
                                {(post.likes !== 0) ? (<img src={liked} alt="" />) : (<img src={like} alt="" />) }
                           </button>
                           <img src={comment} alt="" />
                           <img src={send} alt="" />
                       </div>

                       <strong>{post.likes} curtidas </strong>
                       <p> 
                           {post.description} 
                           <span>{ post.hashtags }</span> 
                        </p>
                   </footer>
               </article>
               ))}       
           </section>
        );
    }
}

export default Feed;