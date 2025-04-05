import Header from './Header.jsx'
import Footer from './Footer.jsx';
import HeroSection from './HeroSection.jsx';
import TaskBoard from './task/TaskBoard.jsx';
export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
