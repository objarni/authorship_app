import * as React from "react";
import * as ReactDOM from "react-dom";

import "./App.css"

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

    public render() {
        const {authors} = this.state;
        return (
            <div className="app">
                <h1>Authorship Visualizer</h1>
                <h2>Commit: #239087233nmeroi234io</h2>
                <AuthorList>{authors.map((a: any) => <Author {...a} />)}</AuthorList>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
