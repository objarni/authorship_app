import * as React from "react";
import "./Author.css"
export interface AuthorProps { email: string; score: number; }

export const Author = ({email, score}: AuthorProps) => 
	<li className="author">
		<span className="author-email">
			{ email  }
		</span>
		<span className={`author-score ${score >= 80 ? 'is-high' : ''}`}>
			{ score  }
		</span>
	</li>;
