import { useNavigate } from "react-router-dom"


const BreadCrumbs = ({routes}) => {
    const nav = useNavigate()
  return (
    <div className="text-sm breadcrumbs py-10">
          <ul className='flex'>
            {routes.map((route, index) => (
                route.link === "" ? (
                    <li key={index}>{route.name}</li>
                ) : (
                    <li key={index}><a href={route.link} className={route.link}>{route.name}</a></li>
                )
            ))} 
          </ul>
      </div>
  )
}

export default BreadCrumbs