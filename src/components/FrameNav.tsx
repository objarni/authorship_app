import * as React from "react";

import "../App.css"

export interface FrameNavProps {
    ix: number, total: number,
    gotoCommitCb: any
}


export const FrameNav = (props: FrameNavProps) =>
    <div className="frame-nav">
        <input
              disabled={props.ix==1}
              type="Button"
              onClick={() => props.gotoCommitCb(1)}
              value="|<"
        />
        <input
              disabled={props.ix==1}
              type="Button"
              onClick={() => props.gotoCommitCb(props.ix-10)}
              value="<<"
        />
        <input
              disabled={props.ix==1}
              type="Button"
              onClick={() => props.gotoCommitCb(props.ix-1)}
              value="<"
        />

        {props.ix} / {props.total}

        <input
               disabled={props.ix==props.total}
               type="Button"
               onClick={() => props.gotoCommitCb(props.ix+1)}
               value=">"
        />
        <input
               disabled={props.ix==props.total}
               type="Button"
               onClick={() => props.gotoCommitCb(props.ix+10)}
               value=">>"
        />
        <input
              disabled={props.ix==props.total}
              type="Button"
              onClick={() => props.gotoCommitCb(props.total)}
              value=">|"
        />
    </div>


// props.gotoCommitCb(props.ix+1)