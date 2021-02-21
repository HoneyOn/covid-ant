const sql = require("./model.js");
const express = require('express');

const app = express();

app.set('port', 8080);

app.get('/api/count/:today', (req, res) => {
  let article_date = req.params.today
  sql.query(`SELECT count FROM article WHERE article_date="${article_date}"`, (error, result) => {
    if (error) throw error;
    res.send(result[0]);
  });
});

app.get('/api/predict/:enterprise', function(req, res){
  let input_enterprise = req.params.enterprise
  sql.query(`SELECT prediction FROM stock WHERE enterprise="${input_enterprise}"`, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});
  
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
