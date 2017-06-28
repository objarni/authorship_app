import * as React from "react";

import "../App.css"

export interface FrameNavProps {
	ix: number, total: number,
	prevCb: any, nextCb: any
}


export const FrameNav = (props: FrameNavProps) =>
	<div>
		<input
		      disabled={props.ix==1}
		      type="Button"
		      onClick={props.prevCb}
		      value="Prev"
		/>
		{props.ix} / {props.total}
		<input
		       disabled={props.ix==props.total}
		       type="Button"
		       onClick={props.nextCb}
		       value="Next"
		/>
	</div>
