import Image from "next/image";
import Link from "next/link";
import Register from "../components/Register";

const regamine = () => {
    return (
        <main className="flex items-center justify-center gap-12 flex-col py-24">
            <Register></Register>
        </main>
    );
}
 
export default regamine;