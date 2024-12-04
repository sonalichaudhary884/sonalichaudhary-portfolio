import SocialLinks from "../SocialLinks";
import "./style.css";
const Contact = () => {
  return (
    <div class="bg-gray-100 pt-24 md:h-screen" id="Contact">
      <div class="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4">
        <h2 class="text-5xl font-bold px-4 md:px-0 text-center z-0 text-gray-900">
          Contact
        </h2>
        <div>
          <h4 class="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p class="text-gray-500 text-xl">
            "if you want to know more about me or my work, or if you would just"
            <br />
            "like to say hello, send me a message. I'd love to hear from you."
          </p>
        </div>
        <div class="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
          <div class="w-full md:pr-8">
            <form>
              <div class="my-6">
                <label for="name" class="">
                  Name
                </label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="mb-4">
                <label for="email">Email</label>
                <input placeholder="Enter your email" required />
              </div>
              <div class="mb-4">
                <label for="message">message</label>
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <div class="flex-justice-between">
                <div underline>
                  <a href="">Send me email directly</a>
                </div>
                <button class="bg-indigo-500 text-white px-2 w-40 rounded-md hover:bg-indigo-400">
                  <a href="">Submit</a>
                </button>
              </div>
            </form>
          </div>
          <div class="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 class="text-3xl font-bold">Email</h1>
            <a
              href=""
              class="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              sonalichaudhary884@gmail.com
            </a>
            <h1 class="text-3xl font-bold">Address</h1>
            <a
              href=""
              class="mt-4 mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              "jhilmil colony, Delhi"
              <br></br>
              "India"
            </a>
            <h1 class="text-3xl font-bold">Social</h1>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
