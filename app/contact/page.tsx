import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Reach out to us."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
