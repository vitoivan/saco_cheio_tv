import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const BreadCrumbComponent = ({ children }) => {
  return (
	<Breadcrumbs separator={<AiFillCaretRight/>} aria-label="breadcrumb">
		{ children }
 	 </Breadcrumbs>
  )
}

export default BreadCrumbComponent