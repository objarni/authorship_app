import * as React from "react";
import * as ReactDOM from "react-dom";

import "./App.css"

import { CommitView } from "./components/CommitView";
import { AuthorList } from "./components/AuthorList";
import { Author } from "./components/Author";
import { FrameNav } from "./components/FrameNav";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            atCommit: 0,
            commits: [
                {
                    commitid: "a9cb4bd",
                    authors:
                    [
                        {
                            email: "olof.bjarnason@gmail.com",
                            score: 100.0
                        }
                    ]
                },
                {
                    commitid: "62ae2cf",
                    authors:
                    [
                        {
                            email: "olof.bjarnason@gmail.com",
                            score: 79.0
                        },
                        {
                            email: "neppord@gmail.com",
                            score: 21.0
                        }
                    ]
                },
                {
                    commitid: "797741d",
                    authors:
                    [
                        {
                            email: "olof.bjarnason@gmail.com",
                            score: 50.0
                        },
                        {
                            email: "neppord@gmail.com",
                            score: 50.0
                        }
                    ]
                }
            ]
        };
    }

    onPrev = () => {
        this.setState((prevState, props) => ({
            atCommit: prevState.atCommit - 1
        }))
    }

    onNext = () => {
        this.setState((prevState, props) => ({
            atCommit: prevState.atCommit + 1
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
                  prevCb={this.onPrev}
                  nextCb={this.onNext} />
                <AuthorList>{authors.map((a: any) => <Author key={a.email} {...a} />)}</AuthorList>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
