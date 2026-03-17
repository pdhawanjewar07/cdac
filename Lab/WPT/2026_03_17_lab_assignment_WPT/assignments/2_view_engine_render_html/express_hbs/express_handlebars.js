import express from "express";
import path from "path";
// >> Helper Functions
function check_perfect_num(n) {
    if (n <= 1)
        return false;
    let sum = 1; // 1 is always a divisor
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            const pair = n / i;
            if (pair !== i) {
                sum += pair;
            }
        }
    }
    return sum === n;
}
const app = express();
// middleware to read form data
app.use(express.urlencoded({ extended: true }));
// set view engine
app.set("view engine", "hbs");
// fix __dirname issue in TS
const __dirnameResolved = path.resolve();
// tell express where views are
app.set("views", path.join(__dirnameResolved, "views"));
//
app.get("/", (req, res) => {
    res.render("index", { result: undefined });
});
app.post("/check_perfect_num", (req, res) => {
    const input_num = Number(req.body.input_num);
    if (isNaN(input_num)) {
        return res.render("index", { result: "Invalid input" });
    }
    const result = check_perfect_num(input_num)
        ? `${input_num} is a Perfect number`
        : `${input_num} is NOT a perfect number`;
    res.render("index", { result });
});
app.listen(5050, () => {
    console.log("Server running on port 5050");
});
