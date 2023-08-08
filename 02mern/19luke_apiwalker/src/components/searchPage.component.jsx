import { useState, useEffect } from "react"
import axios from "axios";

const SearchPage = (props) => {

// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const [selectedPath, setSelectedPath] = useState("/people");
    const [id,setId] = useState("");
    const [data, setData] = useState(null);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const search = () => {
        if (selectedPath && id){
            axios.get(`https://swapi.dev/api/${selectedPath}/${id}`)
            .then((response)=> {
                setData(response.data)
            }).catch((error)=> {
                console.log(error)
            })
        }
    }


// ---------------------------------------------
// III) JSX
// ---------------------------------------------    
return(
    <div>
        <div>
            <select value={selectedPath} onChange={(e) => setSelectedPath(e.target.value)}>
                <option value={"/people"}>People</option>
                <option value={"/planets"}>Planet</option>
            </select>
            <div>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
                <button onClick={() => {search();}}>Buscar</button>
            </div>
            <div>
                {data ?
                    <pre>
                        <h1>name: {data.name}</h1> <br/>
                        {Object.keys(data).slice(0, 4).map((key) =>
                            <p>{key}: {data[key]}</p>
                        )}
                    </pre>
                    : null
                }
            </div>
        </div>
    </div>
)

}

export default SearchPage