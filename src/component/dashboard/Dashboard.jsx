import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const accountType = localStorage.getItem("accountType");
    const firstname = localStorage.getItem("firstname");
    const navigate = useNavigate();
    console.log(accountType);


    const logout = () => {
        localStorage.clear();
        navigate("/login", {replace: true});
    }

    
    useEffect(() => {
        console.log(accountType);
        if(accountType !== null){
            if(accountType === 'Common'){
                alert("No Permission to accesss");
                navigate("/login", {replace: true});

            }else{
                console.log(firstname);
            }   
            
        }else{
            navigate("/login", {replace: true});
        }
    },[])

    return (
        <>
            <div>
                <h1>Dashboard {firstname}</h1>
                <button onClick={logout} >Logout</button>
            </div>
        </>
    )
}   

export default Dashboard;