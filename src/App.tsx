import * as React from "react";
import * as ReactDOM from "react-dom";

import "./App.css"

import { CommitView } from "./components/CommitView";
import { AuthorList } from "./components/AuthorList";
import { Author } from "./components/Author";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            authors:
            [
                {
                    email: "olof.bjarnason@gmail.com",
                    score: 80.0
                },
                {
                    email: "neppord@gmail.com",
                    score: 20.0
                }
            ]
        };
    }

    public componentDidMount(){
        setInterval(this.randomizeScore.bind(this), 1500);
    }

    public randomizeScore() {
        this.setState({
            authors: [
                {
                    email: "olof.bjarnason@gmail.com",
                    score: Math.floor(100.0 * Math.random())
                },
                {
                    email: "neppord@gmail.com",
                    score: Math.floor(100.0 * Math.random())
                }
            ] 
        });

    }

    public render() {
        const {authors} = this.state;
        return (
            <div className="app">
                <h1>Authorship Visualizer</h1>
                <CommitView commitid="62ae2cf" />
                <AuthorList>{authors.map((a: any) => <Author key={a.email} {...a} />)}</AuthorList>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
