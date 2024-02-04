import User from './User'
const handleSubmit=()=>{
    alert('Please enter the username')
}
const data ="Message from parent (sample)"
const handleGetName=(e)=>{
    console.log(e.target.value);
}
function Sample(){
    return(
        <>
        <h2>Inside Sample Components</h2>
        <label style={{margin:'20px'}} htmlFor="uname">Username : <input onChange={(e=>handleGetName(e))} type="text" id='uname' /></label>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        <User Share={data}/>
        </>
    )
}

export default Sample