import * as React from "react";
import { Author } from "./Author"

import "./AuthorList.css"

export interface AuthorListProps { children?: any }


export const AuthorList = ({children}: AuthorListProps) => 
	<ol className="author-list">
		{ children }
	</ol>;
