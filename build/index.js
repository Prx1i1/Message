import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "es6 modules are awesome but tiring sometimes" });
});

app.listen(process.env.PORT || 3000, () => console.log("serwer listening - port 4000"));
//# sourceMappingURL=index.js.map