import * as React from "react";
import * as ReactDOM from "react-dom";

import { AuthorList } from "./components/AuthorList";
import { Author } from "./components/Author";

ReactDOM.render(
    <AuthorList>
    	<Author email="olof.bjarnason@gmail.com" score={80.0} />
    	<Author email="neppord@gmail.com" score={20.0} />
    </AuthorList>,
    document.getElementById("example")
);