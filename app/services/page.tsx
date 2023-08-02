import Breadcrumb from "@/components/Common/Breadcrumb";
// import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Get to know our services."
      />
   <Pricing/>
   </>
  );
};

export default AboutPage;
