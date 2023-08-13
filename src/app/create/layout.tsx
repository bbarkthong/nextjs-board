export default function RootLayout(props) {
    return (
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}
