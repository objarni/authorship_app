import * as React from "react";

// import "./AuthorList.css"

export interface CommitViewProps { commitid: string }


export const CommitView = ({commitid}: CommitViewProps) => 
    <h2>
    	Commit: {commitid}
    </h2>
