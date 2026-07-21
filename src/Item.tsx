type Props = {
    name: string
    href: string
}

export default function Item({name, href}: Props) {
    return (
        <li>
            <button onClick={(e) => {
                e.preventDefault();
                window.open(href, '_blank', 'noopener,noreferrer');
            }}>
                {name}
            </button>
        </li>
    )
}