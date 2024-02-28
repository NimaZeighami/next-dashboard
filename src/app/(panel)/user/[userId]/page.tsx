'use client'
export default function UserDetail(props : any) {
    console.log(props);
    
    return <h1>user id : {props.params.userId}</h1>
}