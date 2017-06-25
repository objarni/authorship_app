import * as React from "react";

export const Author = (
	{email, score}: {email: string, score: number}
) => 
	<li>
		<span>
			{ email  }
		</span>
		<span>
			{ score  }
		</span>
	</li>;
