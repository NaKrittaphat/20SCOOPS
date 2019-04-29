import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
// import ClipLoader from 'react-spinners/ClipLoader';

export default class Mian extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            repo: [],
            loading: false
        }
    }

    get_user(user) {
        fetch(` https://api.github.com/users/${user}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ loading: false })
                // console.log(res);
                this.setState({
                    user: {
                        name: res.login,
                        url: res.url,
                        img: res.avatar_url
                    }
                })
            })
    }
    get_repo(user) {
        fetch(` https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(res => {
                this.setState({ loading: false })
                if (res.message != "Not Found") {
                    // console.log("res", res)
                    let repo = []
                    // console.log(res);
                    repo.push(...res)
                    this.setState({ repo: repo })
                }
                // console.log("res_not", res)
            })
    }
    submit(e) {
        // setTimeout(() => {
        this.setState({ loading: true })
        // }, 100);
        e.preventDefault();
        this.get_user(this.refs.name.value)
        this.get_repo(this.refs.name.value)

    }

    render() {
        const { user, repo } = this.state
        return (
            <div >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                    <Input ref="name" type="type" placeholder="search user" size="1em" />
                    <Button color="primary" onClick={(e) => this.submit(e)}>click</Button>
                </div>
                <div className='sweet-loading' style={style}>
                    <RingLoader
                        css={override}
                        sizeUnit={"px"}
                        size={200}
                        color={'#36D7B7'}
                        loading={this.state.loading}
                    />
                </div>
                <div style={style}>
                    {this.state.loading != true ? user.img ? <img src={user.img} style={{ width: 150, height: 150 }} /> : null : null}
                </div>
                <div style={style}>
                    <Link to={{ pathname: '/user_info', repo: repo, user: user }} style={{ textAlign: 'center', cursor: 'pointer' }}>
                        {this.state.loading != true ? user.name ? <a>{user.name}</a> : null : null}
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {this.state.loading != true ?   user.url ? <p>{user.url}</p> : null   : null}
                </div>
            </div >
        )
    }
}
const style = { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor:pointer;
`

const Input = styled.input.attrs(({ size }) => ({
    padding: size || "1em"
}))`
  color: palevioletred;
  font-size: 1em;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;