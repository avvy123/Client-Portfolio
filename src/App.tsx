import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';

// Lazy load sections for better initial load performance
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Suspense fallback={<div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8"><LoadingSkeleton /><LoadingSkeleton /></div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8"><LoadingSkeleton /><LoadingSkeleton /></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-4 py-20"><LoadingSkeleton /></div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8"><LoadingSkeleton /><LoadingSkeleton /><LoadingSkeleton /></div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-4 py-20"><LoadingSkeleton /></div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
