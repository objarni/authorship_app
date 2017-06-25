import * as React from "react";
import { Author } from "./Author"

export interface AuthorListProps { children?: any }


export const AuthorList = ({children}: AuthorListProps) => 
	<ol>
		{ children }
	</ol>;
