const express =require('express');
const cors =require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('simple node server runing');
});

app.use(cors()); 

app.use(express.json());

const users =[
    {
        id:1, name: 'kol1', email: 'exmple1@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhappy-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAE',
    },

    {
        id:2, name: 'kol2', email: 'exmple2@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhappy-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAE',
    },

    {
        id:3, name: 'kol3', email: 'exmple3@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgirl-with-pigtails-cartoon-character-vector-15054696&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAc',
    },

    {
        id: 4, name: 'kol4', email: 'exmple4@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_69148032_beautiful-little-girl-cartoon.html&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAS',
    },

    {
        id: 5, name: 'ko54', email: 'exmple5@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Flittle-girl-smiles-lifts-up-his-eyes-hands-prayer_13683010.htm&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAN',
    },

    {
        id: 6, name: 'kol-65', email: 'exmple6@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flittle-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAJ',
    }

];

// mongoDB userName : mongouser
// password: pF4LuysSgSj8MlME





const uri = "mongodb+srv://mongouser:pF4LuysSgSj8MlME@cluster0.xy53yfr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){

    try {
        const userCollection = client.db("simpledb").collection('users');
       
        // create a document to insert
        const user = {
          name: "pratima",
          email: "pratima@gmail.com",
        }
        // const result = await userCollection.insertOne(user);
        console.log(result);
        app.post('/users', async (req, res) => {
            console.log('posrt api called');
            const user = req.body;
            user.id =  users.length + 1;
            // users.push(user);
            // console.log(user)

            const result = await userCollection.insertOne(user);
            console.log(result);
            user.id = result.insertedId;
            res.send(user);
        })
      } finally {
        await client.close();
      }

}

run().catch(err => console.log(err))



app.get('/users', (req, res) => {
    if(req.query.name){
        const search =req.query.name;
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search))
        res.send(filtered);
    }
    else{
        res.send(users);
    }
    res.send(users);
})

// app.post('/users', (req, res) => {
//     console.log('posrt api called');
//     const user = req.body;
//     user.id =  users.length + 1;
//     users.push(user);
//     console.log(user)
//     res.send(user);
// })

app.listen(port, () => {
    console.log(`simple not server runing on port ${port }`);
})