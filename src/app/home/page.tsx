
const topics = [
    {
        title : "ReactJs" ,
        active : false
    },
    {
        title : "NodeJS" ,
        active : true
    },
    {
        title : "MongoDB" ,
        active : false
    }, 
    {
        title : "Docker" ,
        active : true
    } ,
    {
        title : "Javascript" ,
        active : false
    }
]

function Home(){
    return <div className="">
        <h1>Welcome to Homepage</h1>
        <h3>Select the Topics here</h3>
        <div>
            {
                topics.map((item, index)=>{
                    return <button key={index} style={{ color : item.active ? "red" : "white" }}>
                        { item.title }
                    </button>
                })
            }
        </div>
    </div>
}


export default Home