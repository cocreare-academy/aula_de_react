import React from 'react';
import './feed.css'


class Feed extends React.Component {
    constructor(props) {
        super(props)

        this.state = {posts: []}
    }

    render() {
        return (
            <div>
                <h1>
                    Feed Page
                </h1>

                {
                    this.state.posts.map((edge, indexEdge) => {
                        return (
                            <div key={'edge-'+indexEdge}>
                                <img className="imagesInstagram" src={edge.node.display_url} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        console.log('Component carregado')
        // console.log(this.props.location.search)
        let params = new URLSearchParams(this.props.location.search)
        console.log('Perfil requisitado:' + params.get('profile'))

        fetch('https://instagram.com/'+params.get('profile')+'/?__a=1')
        .then(response => {
            // if (response.status != 200) {
            //     alert("Usuário não existe")
            //     return new Promise()
            // }
           
            return response.json()
        })
        .then(data => {
            console.log(data)
            if (!data.graphql || !data.graphql.user || !data.graphql.user.edge_owner_to_timeline_media) {
                alert('Feed vazio ou usuário inexistente')
            } else {
                this.setState({
                    posts: data.graphql.user.edge_owner_to_timeline_media.edges
                })
                console.log(this.state.posts)
            }
        })
    }
}


export default Feed