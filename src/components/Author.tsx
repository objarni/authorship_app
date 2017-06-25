import * as React from "react";

export interface AuthorProps { email: string; score: number; }

export const Author = ({email, score}: AuthorProps) => 
	<li>
		<span>
			{ email  }
		</span>
		<span>
			{ score  }
		</span>
	</li>;
