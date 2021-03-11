module.exports = function (app) {
    let fs = require('fs')

    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/HTML/index.html')
    })

    app.get('/Report', (req,res) => {
      res.render(__dirname+'/HTML/Report.html')
    })

    app.get('/SearchingFail', (req,res) => {
      res.render(__dirname+'/HTML/Fail_SearchingFail.html')
    })

    app.get('/ConnectFail', (req,res) => {
        res.render(__dirname+'/HTML/Fail_ConnectFail.html')
      })
  

    app.get('/IllegalPlatform', (req,res) => {
        res.render(__dirname+'/HTML/Fail_IllegalPlatform.html')
      })

    app.get('/IllegalApproach', (req,res) => {
    res.render(__dirname+'/HTML/Fail_IllegalApproach.html')
    })
  }