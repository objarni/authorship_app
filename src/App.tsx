import* as React from "react";
import * as ReactDOM from "react-dom";

import "./App.css"

import { CommitView } from "./components/CommitView";
import { AuthorList } from "./components/AuthorList";
import { Author } from "./components/Author";
import { FrameNav } from "./components/FrameNav";

import { data } from "./Data";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            atCommit: 0,
            commits: data
        };
    }

    gotoCommit = (ix: number) => {
        this.setState((prevState, props) => ({
            atCommit: ix-1
        }))
    }

    public render() {
        const {atCommit} = this.state;
        const {authors, commitid} = this.state.commits[atCommit];
        const numCommits = this.state.commits.length;
        return (
            <div className="app">
                <h1>Authorship Visualizer</h1>
                <CommitView commitid={commitid} />
                <FrameNav
                  ix={atCommit+1}
                  total={numCommits}
                  gotoCommitCb={this.gotoCommit}
                />
                <AuthorList>{authors.map((a: any) => <Author key={a.email} {...a} />)}</AuthorList>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
