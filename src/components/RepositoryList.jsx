import { RepositoryItem } from "./RepositoryItem";

const repository  = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
               
            <RepositoryItem  repository={repository} />
            <RepositoryItem />
            <RepositoryItem />
     
            </ul>    
        
        </section>
    )
}