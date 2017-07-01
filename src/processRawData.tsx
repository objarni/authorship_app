export const processRawData = (rawData: any) => {
//	var processAuthor = ({email, lines}: any) => ({email: email, score: lines});
    const processCommit = ({commitid, authors}: any) => {
        const intedAuthors = authors.map(
            ({email, lines}:any) => ({email:email, lines:parseInt(lines)})
        );
        // console.log("intedAuthors:", intedAuthors);
        const getLines = ({lines:lines1}: any, {lines:lines2}: any) => ({lines:lines1+lines2});
        const totalLines = intedAuthors.reduce(getLines, {lines:0}).lines;
        // console.log("totalLines:", totalLines);
        const sortedAuthors = intedAuthors.sort((auth1: any, auth2: any) => {
            const {lines:lines1} = auth1;
            const {lines:lines2} = auth2;
            return lines2 - lines1;
        });
        // console.log("sortedAuthors:", sortedAuthors);
        const processedAuthors = sortedAuthors.map(
            ({email, lines}:any) =>
                ({email:email, score:(lines*100/totalLines).toFixed(1)}));
        // console.log("processedAuthors:", processedAuthors);
        return {commitid: commitid, authors: processedAuthors};
    }
    return rawData.map(processCommit);
}