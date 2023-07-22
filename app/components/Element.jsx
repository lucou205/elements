export default function Element({ number, letter, element, mass, cat, x, y }) {

    const classes = {
        'diatomic nonmetal': "bg-emerald-500",
        'noble gas': "bg-purple-500",
        'alkali metal': "bg-orange-500",
        'actinide': "bg-pink-500",
        'alkaline earth metal': "bg-yellow-500",
        'metalloid': "bg-teal-500",
        'post-transition metal': "bg-sky-500",
        'transition metal': "bg-red-500",
        'lanthanide': "bg-amber-500",
        'polyatomic nonmetal': "bg-green-500",
    }

    let bg = ''

    if (classes[cat] == undefined || letter == 'Cn' || letter == 'Fl') {
        bg = 'bg-slate-200'
    } 

    return (
        <div className={`${classes[cat]} ${bg} cursor-pointer hover:scale-105 ease-out duration-200 rounded-md shadow-light p-1 font-Roboto ${element}`}>
            <p className="text-md leading-5">{number}</p>
            <h2 className="text-lg tracking-wider leading-5 font-bold">{letter}</h2>
            <p className="text-sm leading-3 tracking-tight">{element}</p>
            <p className="text-xxs leading-4 truncate">{mass}</p>
        </div>
    )
}