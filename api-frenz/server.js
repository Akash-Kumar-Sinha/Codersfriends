const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());

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


app.get('/', (req, res) => {
    db.select('*').from('users')
    .then(users =>{
        res.json(users);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: '1: Internal server error' });
    });
});


app.post('/register', (req, res)=>{
    const {role, name, link} = req.body;

    if(!name || !link || !role){
        res.status(200).json({message: 'Input can not be empty!'})
    }

    else if (link.startsWith('https://www.linkedin.com/in/')){

        db.select('*')
        .from('users')
        .where('name', name)
        .orWhere('linkedin', link)
        .then(existingUsers => {
            if(existingUsers.length > 0){
                res.status(200).json({message: 'Username or LinkedIn profile already Exist!'})
            }
            else{
                db.transaction(trx => {
                    trx.insert({
                        role: role,
                        name: name,
                        twitter: null,
                        linkedin: link
                    })
                    .into('users')
                    .returning('*')
                    .then((user)=>{
                        trx.commit();
                        res.status(200).json({ message: 'User Registered Successfully!' })
                    })
                    .catch((err) => {
                        res.json({ message: 'Registeration unsuccessful!' })

                        console.error('Error inserting user:', err);
                        trx.rollback(); 
                        res.status(500).json({ error: '2: Internal server error!' });
                    });
                })
            }
        })

        


    }else if (link.startsWith('https://x.com/')){

        db.select('*')
        .from('users')
        .where('name', name)
        .orWhere('linkedin', link)
        .then(existingUsers => {
            if(existingUsers.length > 0){
                res.status(200).json({message: 'Username or LinkedIn profile already Exist!'})
            }
            else{
                db.transaction(trx => {
                    trx.insert({
                        role: role,
                        name: name,
                        twitter: null,
                        linkedin: link
                    })
                    .into('users')
                    .returning('*')
                    .then((user)=>{
                        trx.commit();
                        res.status(200).json({ message: 'User Registered Successfully!' })
                    })
                    .catch((err) => {
                        console.error('Error inserting user:', err);
                        trx.rollback(); 
                        res.status(500).json({ error: '3: Internal server error!' });
                    });
                })
            }
        })
        
    }else {

        return res.status(400).json({ message: 'Invalid userName or URL format!' });

    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
