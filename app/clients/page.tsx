import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";

const ClientsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Testimonials"
        description="Get to know our work."
      />
      <Testimonials/>
    </>
  );
};

export default ClientsPage;
