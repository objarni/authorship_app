interface RawAuthor {
    email: string,
    lines: string
}

interface AuthorLines {
    email: string,
    lines: number
}

interface AuthorScore {
    email: string,
    score: string
}

interface CommitRaw {
    commitid: string,
    authors: RawAuthor[]
}

interface CommitScore {
    commitid: string,
    authors: AuthorScore[]
}

export const processRawData = (rawData: CommitRaw[]): CommitScore[] => {
    const processCommit = ({commitid, authors}: CommitRaw) => {
        const intedAuthors = authors.map(
            ({email, lines}: RawAuthor) => ({email:email, lines: parseInt(lines)})
        );
        const totalLines = intedAuthors
            .map(({lines}) => lines)
            .reduce((a:number, b:number) => (a + b), 0);
        const sortedAuthors = intedAuthors
            .sort((auth1: AuthorLines, auth2: AuthorLines) => {
                const {lines: lines1} = auth1;
                const {lines: lines2} = auth2;
                return lines2 - lines1;
            });
        const processedAuthors = sortedAuthors.map(
            ({email, lines}: AuthorLines) =>
                ({email: email, score: (lines*100/totalLines).toFixed(1)}));
        return {
            commitid: commitid,
            authors: processedAuthors
        };
    }
    return rawData.map(processCommit).reverse();
}