export const isAuthenticated = () => {
    let payload = localStorage.getItem("payload");
    if(payload !== null ){
        return true;
    }else{
        return false;
    }
}

export const getUserData = () => {
    let payload = localStorage.getItem("payload");
    // console.log(payload)
    return payload ? payload : null;
}