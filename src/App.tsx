import * as React from "react";
import * as ReactDOM from "react-dom";

import "./App.css"

import { AuthorList } from "./components/AuthorList";
import { Author } from "./components/Author";

class App extends React.Component<any, any> {
    public render() {
        return (
            <div className="app">
                <h1>Authorship Visualizer</h1>
                <h2>Commit: #239087233nmeroi234io</h2>
                <AuthorList>
                    <Author email="olof.bjarnason@gmail.com" score={80.0} />
                    <Author email="neppord@gmail.com" score={20.0} />
                </AuthorList>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
