import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User_Information extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            repo: []
        }
    }
    componentWillMount() {
        this.setState({ user: this.props.location.user })
        this.setState({ repo: this.props.location.repo })
        // console.log("se", this.props.location.repo);
        // console.log("se", this.props.location.user);
    }


    render() {
        const user = this.state.user
        const repo = this.state.repo
        return (
            <div>
                <div style={style} >
                    <Link to={{ pathname: '/' }} style={{ textAlign: 'center', cursor: 'pointer' }}>
                        back
                </Link>
                </div>
                <div style={style} >

                    {user.img != null ? <img src={user.img} style={{ width: 150, height: 150 }} /> : null}
                </div>
                <div style={{ textAlign: 'center' }} >
                    {user.name != null ? <p>{user.name}</p> : null}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {repo ? <p>repo : {repo.length}</p> : null}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {repo.map((e, i) => {
                        return (
                            <div key={i}>
                                repo {i + 1} name : {e.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const style = { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }

