const express = require("express");
const app = express();
const router = require("./routes");
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server rumming on ${PORT}`);
});
