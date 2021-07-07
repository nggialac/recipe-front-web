import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import RecipesMain from './RecipesMain'

export default function recipes() {
    return (
        <div>
        {" "}
        <Navbar isActive={true} />
        <RecipesMain />
        <Footer />
      </div>
    )
}
