import MainLayout from "../components/Layout/MainLayout";
import HomeHero from "../components/HomePage/HomeHero";
import WhyUs from "../components/HomePage/WhyUs";
import HomeClasses from "../components/HomePage/HomeClasses/HomeClasses";
import ClassCategories from "../components/HomePage/HomeClassCategories/HomeClassCategories";
import HomeTestimonials from "../components/HomePage/HomeTestimonials/HomeTestimonials";
import BecomeAnInstructor from "../components/HomePage/BecomeAnInstructor";
import FAQs from "../components/HomePage/FAQs/FAQs";

export default function Docs() {
  return (
    <MainLayout>
      <HomeHero />
      <HomeClasses />
      <WhyUs />
      <ClassCategories />
      <HomeTestimonials />
      <BecomeAnInstructor />
      <FAQs />
    </MainLayout>
  );
}
