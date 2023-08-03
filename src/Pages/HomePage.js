import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";

function HomePage(){
    return <div style={{border:"2px solid yellow", backgroundColor: "white", padding:"10px" }}>
    <Header/>
    <SearchBar/>
    <EmployeeList/>
    </div>
}

export default HomePage;