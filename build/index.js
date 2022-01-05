import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "inny niż mój" });
});

app.listen(process.env.PORT || 3000, () => console.log("serwer listening - port 3000"));
//# sourceMappingURL=index.js.map
