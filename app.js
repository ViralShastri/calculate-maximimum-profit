// Viral Shastri
// Language: javascript
// Path: app.js
// Time Complexity: O(nLog(n))
// Space Complexity: O(n)
// Input: Array of Movie Object
// Output: Array of Profit and Selected Movies

const calculateMaximimumProfit = movies => {
    moviesDone = [];
    movieCharge = 10000000;

    movies.sort((a, b) => {
        return new Date(a.end) - new Date(b.end);
    });

    if (movies.length) {
        moviesDone.push(movies[0]);
        prev_end = movies[0]["end"];

        for (let i = 1; i < movies.length; i++) {
            curr_start = movies[i]["start"];
            curr_end = movies[i]["end"];
            if (new Date(curr_start) > new Date(prev_end)) {
                moviesDone.push(movies[i]);
                prev_end = curr_end;
            }
        }
    }

    profit = movieCharge * moviesDone.length;

    return [profit, moviesDone];
};

movies = [
    { name: "Bala", start: "08 Jan 2020", end: "28 Jan 2020" },
    { name: "Rock", start: "20 Jan 2020", end: "30 Jan 2020" },
    {
        name: "PolicyMaker",
        start: "29 Jan 2020",
        end: "16 Feb 2020",
    },
    { name: "Brave", start: "02 Feb 2020", end: "14 Feb 2020" },
    { name: "Drive", start: "10 Feb 2020", end: "18 Feb 2020" },
    { name: "Race", start: "15 Feb 2020", end: "28 Feb 2020" },
];

[profit, moviesDone] = calculateMaximimumProfit(movies);

console.log(profit, moviesDone);
