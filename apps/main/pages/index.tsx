import { Button } from "ui";
import MainLayout from "../components/Layout/MainLayout";
import HomeHero from "../components/HomePage/HomeHero";
import WhyUs from "../components/HomePage/WhyUs";
import HomeClasses from "../components/HomePage/HomeClasses/HomeClasses";
import ClassCategories from "../components/HomePage/ClassCategories/ClassCategories";

export default function Docs() {
  return (
    <MainLayout>
      <HomeHero />
      <WhyUs />
      <HomeClasses />
      <ClassCategories />
    </MainLayout>
  );
}
