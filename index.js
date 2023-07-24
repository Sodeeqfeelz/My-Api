const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const cors = require('cors')
app.use(cors())
app.use(express.json())

let Port = 5100

let student = [
    {
        id: 1,
        firstname: "Adebanjo",
        lastname: "Razaq",
        email: "adebanjorazaq@gmail.com",
        school: "SQI",
        age: 25,
        status: "single",
        nickname: "Razman",
        course: "software Engineer",
        state: "Ogbomoso"
    },
    {
        id: 2,
        firstname: "Ajenifuja",
        lastname: "Sodeeq",
        email: "sodeeqajenifuja1@gmail.com",
        school: "SQI",
        age: 222,
        status: "single",
        nickname: "Sodeeqfeelz",
        course: "software Engineer",
        state: "Ogun State"
    },
    {
        id: 3,
        firstname: "Yakub",
        lastname: "Yusuf",
        email: "yakubyusuf@gmail.com",
        school: "SQI",
        age: 247,
        status: "single",
        nickname: "Papiloyaks",
        course: "software Engineer",
        state: "Abuja"
    },
    {
        id: 4,
        firstname: "Abdullahi",
        lastname: "Samsondeen",
        email: "abdullahisamsondeen@gmail.com",
        school: "SQI",
        age: 214,
        status: "single",
        nickname: "Captain OIG",
        course: "software Engineer",
        state: "Ogbomoso"
    },
    {
        id: 5,
        firstname: "Mr",
        lastname: "Ola",
        email: "mrola@gmail.com",
        school: "SQI",
        age: 195,
        status: "married",
        nickname: "Olaclothing",
        course: "software Engineer",
        state: "Oyo"
    },
    {
        id: 6,
        firstname: "Mr",
        lastname: "Ibrahim",
        email: "mribrahim@gmail.com",
        school: "SQI",
        age: 250,
        status: "single",
        nickname: "Ibro",
        course: "software Engineer",
        state: "Ogbomoso"
    },
    {
        id: 7,
        firstname: "miss",
        lastname: "Oyin",
        email: "missoyin@gmail.com",
        school: "SQI",
        age: 270,
        status: "marriage soon",
        nickname: "Senior Dev",
        course: "software Engineer",
        state: "Oyo"
    },
    {
        id: 8,
        firstname: "Mr",
        lastname: "Dami",
        email: "mrDami@gmail.com",
        school: "SQI",
        age: 107,
        status: "married soon",
        nickname: "Dammy",
        course: "software Engineer",
        state: "Ogbomoso"
    },
    {
        id: 9,
        firstname: "Mr",
        lastname: "Demola",
        email: "mrdemola@gmail.com",
        school: "SQI",
        age: 89,
        status: "married soon",
        nickname: "Demo",
        course: "software Engineer",
        state: "Abuja"
    },
    {
        id: 10,
        firstname: "Adenuga",
        lastname: "Samuel",
        email: "samueladenuga@gmail.com",
        school: "SQI",
        age: 30,
        status: "married",
        nickname: "samuloko",
        course: "Hardware Engineering",
        state: "Osun"
    },
    {
        id: 11,
        firstname: "Elonmusk",
        lastname: "Dangote",
        email: "dangoteelonmusk@gmail.com",
        school: "SQI",
        age: 91,
        status: "Divorce",
        nickname: "Aliko",
        course: "marketing",
        state: "Lagos"
    },
    {
        id: 12,
        firstname: "Ayres",
        lastname: "James",
        email: "jamesayres@gmail.com",
        school: "SQI",
        age: 65,
        status: "single",
        nickname: "Ozu",
        course: "computer science",
        state: "Nebraska"
    },
    {
        id: 13,
        firstname: "Ademoye",
        lastname: "Ajebo",
        email: "ademoyeajebo@gmail.com",
        school: "SQI",
        age: 70,
        status: "married",
        nickname: "Jebo",
        course: "computer Engineer",
        state: "California"
    },
    {
        id: 14,
        firstname: "Oyekola",
        lastname: "Nasir",
        email: "oyekolanasir@gmail.com",
        school: "SQI",
        age: 72,
        status: "single",
        nickname: "Nozo",
        course: "Computer Engineering",
        state: "Ekiti"
    },
    {
        id: 15,
        firstname: "Oyegbola",
        lastname: "Aminat",
        email: "oyegbolaaminat@gmail.com",
        school: "SQI",
        age: 22,
        status: "single",
        nickname: "minah",
        course: "software Engineer",
        state: "Lagos"
    },
    {
        id: 16,
        firstname: "Adesoye",
        lastname: "Ibrahim",
        email: "adesoyeibrahim@gmail.com",
        school: "SQI",
        age: 32,
        status: "married",
        nickname: "Ibrotekan",
        course: "marketing",
        state: "Anabra"
    },
    {
        id: 17,
        firstname: "Jan",
        lastname: "Janet",
        email: "janjanet@gmail.com",
        school: "SQI",
        age: 45,
        status: "married",
        nickname: "Jany",
        course: "ICT",
        state: "Oyo"
    },
    {
        id: 18,
        firstname: "Adebanjo",
        lastname: "Razaq",
        email: "adebanjorazaq@gmail.com",
        school: "SQI",
        age: 65,
        status: "single",
        nickname: "Razman",
        course: "software Engineer",
        state: "Ogbomoso"
    },
]

app.get('/', (req,res)=>{
    console.log("Hello World");
    res.send(student)
})




app.listen(Port, ()=>{
    console.log(`sever as started on port ${Port}`);
})