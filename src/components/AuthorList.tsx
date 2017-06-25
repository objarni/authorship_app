import * as React from "react";
import { Author } from "./Author"

export const AuthorList = (props: any) => 
	<ol>
		{ props.children }
	</ol>;
