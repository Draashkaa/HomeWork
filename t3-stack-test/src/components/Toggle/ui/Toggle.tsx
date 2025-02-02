
import { type StoryCardProps, type Story } from "../types"

export const StoryCard: React.FC<StoryCardProps> = ({data, search, setSearch, ActivSearch, setActivSearch}) => {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmitSearch = (e) => {
        setActivSearch(search)
        setSearch('')
        e.preventDefault()
    }
    return (
        <form>
        <div>
            <input type={'text'} value={search} onChange={handleSearchChange}/>
            <button type={'submit'} onClick={handleSubmitSearch}>search</button>
        </div>
        <ul>
            {data.map((item: Story) => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
        </form>
    )
}