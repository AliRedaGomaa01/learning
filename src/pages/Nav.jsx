export default function Nav({ list , selectedItem , setSelectedItem }) {
  return (
    <>
      {!!list.length && <>
        <nav >
          <ul className="flex flex-row flex-wrap gap-5 place-content-center border-2 border-black p-2 rounded-xl" >
            {
              list.map((name) => (
                <li key={name} className={"font-bold px-3 py-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer " + `${selectedItem === name && 'active' }`}
                  onClick={() => { setSelectedItem(name) }}>
                  {name}
                </li>
              ))
            }
          </ul>
        </nav>
      </>}
    </>
  )
}