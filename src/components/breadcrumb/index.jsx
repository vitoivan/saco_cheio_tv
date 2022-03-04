import { Breadcrumbs } from '@mui/material'
import { AiFillCaretRight } from 'react-icons/ai'


const BreadCrumbComponent = ({ children }) => {
  return (
	<Breadcrumbs separator={<AiFillCaretRight/>} aria-label="breadcrumb">
		{ children }
 	 </Breadcrumbs>
  )
}

export default BreadCrumbComponent