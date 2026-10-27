import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import ProductPreview from '../components/layout/ProductPreview'
import { WhySection, FeaturesSection } from '../components/Landing'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductPreview />
            <WhySection />
            <FeaturesSection />
        </>
    )
}