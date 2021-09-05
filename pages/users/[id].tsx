import {useRouter} from "next/router";
import NavbarLayout from "../../components/navbarLayout/navbarLayout";

export default function Id ({user}: any) {
const {query} = useRouter()
 
    return (
        <NavbarLayout keywords={user.name}>
            <p> Пользователь <span style={{color: "red"}}>#{query.id} </span> </p>
            <p>Имя пользователя - {user.name}</p>
        </NavbarLayout>
    )
}


export const getServerSideProps = async ({params}: any) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {user}, // will be passed to the page component as props
    }
}
