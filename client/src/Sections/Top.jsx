
const Top = () => {
  return (
    <header className="bg-black text-white flex gap-2 justify-center items-center font-light text-md">
        <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <a href="/" className="underline decoration-solid">Shop Now</a>
        <form method="post" className="relative left-32 ">
          <select name="Languages" className="bg-black text-white outline-none border-none">
            <option value="double chocolate">English</option>
            <option value="vanilla">Spanish</option>
            <option value="strawberry">French</option>
            <option value="caramel">Italian</option>
          </select>
        </form>
    </header>
  )
}

export default Top