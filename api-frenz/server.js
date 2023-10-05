const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// app.use(cors())

const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'akashfrenz',
      password : 'aks7536',
      database : 'codefrenz'
    }
  });

app.post('/register', (req, res)=>{
    const {name, link} = req.body;

    if (link.startsWith('https://www.linkedin.com/in/')){

        db.transaction(trx => {
            trx.insert({
                name: name,
                twitter: null,
                linkedin: link
            })
            .into('users')
            .then(()=>{
                trx.commit();
                res.status(200).json({ message: 'User Registered Successfully' })
            }).catch((err) => {
                console.error('Error inserting user:', err);
                trx.rollback(); 
                res.status(500).json({ error: 'Internal server error' });
            });
        })


    }else if (link.startsWith('https://twitter.com/')){

        db.transaction(trx => {
            trx.insert({
                name: name,
                twitter: link,
                linkedin: null
            })
            .into('users')
            .then(()=>{
                trx.commit();
                res.status(200).json({ message: 'User Registered Successfully' })
            }).catch((err) => {
                console.error('Error inserting user:', err);
                trx.rollback(); 
                res.status(500).json({ error: 'Internal server error' });
            });
        })
        
    }else {

        return res.status(400).json({ error: 'Invalid URL format' });

    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});