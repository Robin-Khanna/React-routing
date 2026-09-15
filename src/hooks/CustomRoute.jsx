import { Route } from "react-router-dom"

const CustomRoute = ({path,element}) => {


  return (
    <Route path={path} element={ element } />
  )

}

export default CustomRoute