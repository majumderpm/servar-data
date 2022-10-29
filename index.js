const express =require('express');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('simple node server runing');
});

app.use(cors()); 

const users =[
    {
        id:1, name: 'kol', email: 'exmple@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhappy-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAE',
    },

    {
        id:1, name: 'kol', email: 'exmple@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhappy-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAE',
    },

    {
        id: 2, name: 'kol2', email: 'exmple2@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgirl-with-pigtails-cartoon-character-vector-15054696&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAc',
    },

    {
        id: 3, name: 'kol3', email: 'exmple3@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_69148032_beautiful-little-girl-cartoon.html&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAS',
    },

    {
        id: 4, name: 'kol4', email: 'exmple4@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Flittle-girl-smiles-lifts-up-his-eyes-hands-prayer_13683010.htm&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAN',
    },

    {
        id: 2, name: 'kol-5', email: 'exmple5@gmail.com', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flittle-girl&psig=AOvVaw1K4PFr6jqP7DA7CyJkfanr&ust=1667142775577000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjNifnchfsCFQAAAAAdAAAAABAJ',
    }

];

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`simple not server runing on port ${port }`);
})