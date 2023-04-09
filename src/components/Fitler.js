export default function Filter({filter, setFilter}) {
return <div>
    filter shown with
    <input value={filter} onChange={(target) => setFilter(target.target.value)}/>
</div>
}