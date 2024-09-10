const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [{
                "_id": 1,
                "name": "Getting Over",
                "album": "One Love",
                "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
                "artist": {
                    "name": "David Guetta",
                    "nickname": "David Guetta",
                    "nationality": "FR"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track.mp3`
            },
            {
                "_id": 2,
                "name": "Snow Tha Product || BZRP Music Sessions #39",
                "album": "BZRP Music Sessions",
                "cover": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg",
                "artist": {
                    "name": "Snow",
                    "nickname": "Snow",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-1.mp3`
            },
            {
                "_id": 3,
                "name": "Calypso (Original Mix)",
                "album": "Round Table Knights",
                "cover": "https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg",
                "artist": {
                    "name": "Round Table Knights",
                    "nickname": "Round Table Knights",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-2.mp3`
            },
            {
                "_id": 4,
                "name": "Bad Habits",
                "album": "Ed Sheeran",
                "cover": "https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg",
                "artist": {
                    "name": "Ed Sheeran",
                    "nickname": "Ed Sheeran",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-4.mp3`
            },
            {
                "_id": 5,
                "name": "BEBE (Official Video)",
                "album": "Giolì & Assia",
                "cover": "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
                "artist": {
                    "name": "Giolì & Assia",
                    "nickname": "Giolì & Assia",
                    "nationality": "IT"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-3.mp3`
            },
            {
                "_id": 6,
                "name": "T.N.T. (Live At River Plate, December 2009)",
                "album": "AC/DC",
                "cover": "https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg",
                "artist": {
                    "name": "AC/DC",
                    "nickname": "AC/DC",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-5.mp3`
            },
            {
                "_id": 7,
                "name": "50 Cent - Candy Shop (feat. Olivia)",
                "album": "50 Cent",
                "cover": "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
                "artist": {
                    "name": "50 Cent",
                    "nickname": "50 Cent",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-6.mp3`
            },
            {
                "_id": 8,
                "name": "Bésame💋",
                "album": "Valentino Ft MTZ Manuel Turizo (Video Oficial)",
                "cover": "https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg",
                "artist": {
                    "name": "Valentino",
                    "nickname": "Valentino",
                    "nationality": "CO"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-7.mp3`
            },
            {
                "_id": 9,
                "name": "Ryan Castro, Feid - Monastery (Vídeo Oficial)",
                "album": "Ryan Castro, Feid - Monastery (Vídeo Oficial)",
                "cover": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8u9_glrEa9u8AgDhRvF6ll2CI7X4fvb3xlmMmZ13AtYh1pg7d",
                "artist": {
                    "name": "Monastery",
                    "nickname": "Monastery",
                    "nationality": "CO"
                },
                "duration": {
                    "start": 0,
                    "end": 354
                },
                "url": `${URL_PUBLIC}/track-9.mp3`
            },
            {
                "_id": 10,
                "name": "Medallo - Blessd x Lenny Tabares x Justin Quiles ",
                "album": "Medallo - Blessd x Lenny Tabares x Justin Quiles ",
                "cover": "https://i.ytimg.com/vi/FXO40R1_wgc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_va10-UWyzNhAgx8J0W70GJQS4w",
                "artist": {
                    "name": "Blessd",
                    "nickname": "Blessd",
                     "nationality": "CO"
                },
                "duration": {
                    "start": 0,
                    "end": 400
                },
                "url": `${URL_PUBLIC}/track-8.mp3`
            }

        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }