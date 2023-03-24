import { Button } from "ui";
import MainLayout from "../components/Layout/MainLayout";
import HomeHero from "../components/HomePage/HomeHero";
import WhyUs from "../components/HomePage/WhyUs";
import HomeClasses from "../components/HomePage/HomeClasses/HomeClasses";

export default function Docs() {
  return (
    <MainLayout>
      <HomeHero />
      <WhyUs />
      <HomeClasses />
      <div>
        <h1>Main Website</h1>
        {/* <Button /> */}
      </div>
    </MainLayout>
  );
}
