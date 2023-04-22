export default function LoginForm({login, password, handleSubmit}) {
return <form onSubmit={handleSubmit}>
    <div>
            <input value={login} />
    <input value={password} />
    <button onSubmit={handleSubmit}/>
    </div>
</form>
}