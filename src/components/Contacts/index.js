import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";
import "./style.css";

const Contact = () => {
  return (
    <div class="bg-gray-100">
      <div id="Contact" class="max-w-7xl mx-auto x-4">
        <h2 class="text-5xl font-bold md:px-0 text-center z-0 text-gray-900 contact_head">
          Contact
        </h2>
        <h4 class="text-3xl font-semibold text-blue-500 contact_subhead">
          Connect with me
        </h4>
        <div class="form_container flex justify-between items-center md:items-stretch flex-col md:flex-row">
          <ContactForm />
          <div class="w-full flex flex-col md:items-end">
            <h1 class="text-3xl font-bold e_head">Email</h1>
            <a
              href="www.google.com"
              class="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              sonalichaudhary884@gmail.com
            </a>
            <h1 class="text-3xl font-bold a_head">Address</h1>
            <a
              href="www.google.com"
              class="mt-4 mb-12 md:text-right font-semibold text-blue-700 block uppercase "
            >
              New market, Banda
              <br></br>
              India
            </a>
            <h1 class="text-3xl font-bold n_head">Social</h1>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
