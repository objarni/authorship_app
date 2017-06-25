import * as React from "react";
import "./Author.css"
export interface AuthorProps { email: string; score: number; }

function scoreClass(score: number) {
	if(score < 40)
		return '';
	if(score < 80)
		return 'is-medium';
	return 'is-high';
}

export const Author = ({email, score}: AuthorProps) => 
	<li className="author">
		<span className="author-email">
			{ email  }
		</span>
		<span className={`author-score ${scoreClass(score)}`}>
			{ score  }
		</span>
	</li>;
