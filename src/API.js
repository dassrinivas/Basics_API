import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const PlayerComponent = () => {
    const [division, setDivision] = useState([]);

    useEffect(() => {
        axios.get('')
        .then(response => {
            const b = response.data;

            const division = b.data[1].team.division;
            setDivision(division);
        })
        .catch(error=> {
            alert('error in fetching :', error);
        });
    }, []);

    return(
        <div>
        {division !== '' && (<div>
            <h1>Post </h1>
        </div>
        
        )}
        </div>
    );
}

// export default PlayerComponent;