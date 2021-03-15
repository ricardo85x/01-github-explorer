export function RepositoryItem( {repository}) {
    return (
        <li>
            <strong>{repository?.name ?? 'Default'}</strong>
            <p>{repository?.description ?? 'Description'}</p>

            <a href={repository?.link ?? '#'}>
                Acessar repositorio
            </a>
        </li>
    );
}