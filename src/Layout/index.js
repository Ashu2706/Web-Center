import React from 'react'
import './index.css'
import Banner from '../Components/Banner/Banner'
import BoxCard from '../Components/Cards/BoxCard'
import NewsSubsciption from '../Components/Subscription/NewsSubsciption'
import Footer from './Footer'
import { Header } from './Header'
import Contact from '../Components/Contact/Contact'
import FormModal from '../Components/Form/FormModal'
import Learn from '../Pages/Courses/Learn'
import FAQ from '../Pages/FAQ/FAQ'
import Instructors from '../Pages/Instructors/Instructors'

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Banner/>
                <NewsSubsciption/>
                <BoxCard/>
                {/* Pages */}
                <Learn/>
                <FAQ/>
                <Instructors/>
                {/* contact */}
                <Contact/>
            </main>
            <Footer/>
            <FormModal/>
        </>
    )
}
export default Layout
