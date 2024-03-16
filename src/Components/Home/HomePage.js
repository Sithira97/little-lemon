import Header from '../_layouts/Header.js';
import HeroSection from './Sections/HeroSection.js';
import HighLightSection from './Sections/HighLightSection.js';
import TestimonialsSection from './Sections/TestimonialsSection.js'
import AboutSection from './Sections/AboutSection.js'
import Footer from '../_layouts/Footer.js';


function HomePage() {
    let specials = require('../../menu.json');
    const testimonials = [
        {
            'rating': 5,
            'name': 'Maria Tedrow',
            'profile': '1',
            'review': 'Excellent food. Menu is extensive and seasonal to a particularly high  standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.'
        },
        {
            'rating': 4,
            'name': 'Jessica Johns',
            'profile': '2',
            'review': 'I have to say, I enjoyed every single bite of the meal in Little Lemon. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.'
        },
        {
            'rating': 4.5,
            'name': 'Shane Carter',
            'profile': '3',
            'review': 'This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some Italian classics and some twists, and for their prices it’s 100% worth it.'
        },
        {
            'rating': 5,
            'name': 'John Junior',
            'profile': '4',
            'review': 'First time in Little Lemon and YOU have to go! It’s the cutest little spot with amazing food. The Pasta is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again. They made us feel welcomed and gave us an amazing experience.'
        },
    ]
    return (
        <>
            <Header />
            <main className="main">
                <HeroSection />
                <HighLightSection specials={specials} />
                <TestimonialsSection testimonials={testimonials} />
                <AboutSection />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;