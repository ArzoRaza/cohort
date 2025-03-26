// fetch("https://api.freeapi.app/api/v1/public/books")
// .then(res => res.json)
// .then(
//     console.log(data)
// )

const Data = fetch('https://api.freeapi.app/api/v1/public/books')
.then(res => res.json())
.then(
    data => console.log(data.data.data[0].valumeinfo)
)
