import React from "react";

function Twitter() {

    state = {
        tweet: 'title'
    }

    componentDidMount = () => {
        const { posts, loading } = props;
        console.log('componentDidMount', posts);
        console.log('componentDidMount:loading', loading);
    }

    componentDidUpdate = (prevProps) => {
        const { loading } = props;
        if(props.loading !== prevProps.loading) {
            console.log('componentDidMount:loading', loading);
        }
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount: removido!')
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return state.tweet !== nextState.tweet
    }

    tweet = () => {
        setState({
            tweet: true
        })
    }

    const {posts} = props;
    console.log('render', posts);
    return (
        <div>
        <button onClick={tweet}>Re-render</button>
            tests
        </div>
    )
}

export default Twitter