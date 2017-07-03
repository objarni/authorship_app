import * as React from "react";

import "../App.css"

export interface FrameNavProps {
	ix: number, total: number,
	gotoCommitCb: any
}


export const FrameNav = (props: FrameNavProps) =>
	<div>
		<input
		      disabled={props.ix==1}
		      type="Button"
		      onClick={() => props.gotoCommitCb(props.ix-2)}
		      value="Prev"
		/>
		{props.ix} / {props.total}
		<input
		       disabled={props.ix==props.total}
		       type="Button"
		       onClick={() => props.gotoCommitCb(props.ix)}
		       value="Next"
		/>
	</div>


// props.gotoCommitCb(props.ix+1)