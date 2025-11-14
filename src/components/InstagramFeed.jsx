import { FaInstagram } from "react-icons/fa"; // Make sure to install react-icons: npm install react-icons

const posts = [
  {
    image: process.env.PUBLIC_URL + "/images/InstagramFeed/542365017_17877133137401175_9154458372720080232_n.jpg",
    link: "https://www.instagram.com/p/DOOdJ6mjGQU/?img_index=1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/InstagramFeed/510969917_17868285066401175_6499794041135488969_n.jpg",
    link: "https://www.instagram.com/p/DLaYsdPNEi2/?img_index=1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/InstagramFeed/548919590_17878194453401175_5139104754431246627_n.jpg",
    link: "https://www.instagram.com/p/DOluzDVDaWR/?img_index=1",
  },
  {
    image: process.env.PUBLIC_URL + "/images/InstagramFeed/504267353_17865705735401175_2877685681828617410_n.jpg",
    link: "https://www.instagram.com/p/DKnLpzONRAA/?img_index=1",
  },
];

export default function InstagramFeed() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-center rounded-xl">
      {/* You can change bg-gray-50 to any color you like, e.g., bg-white, bg-pink-50, bg-gradient-to-r from-pink-100 to-pink-200 */}

      <h3 className="text-3xl font-serif mb-8">Zapratite nas na Instagramu</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={post.image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>

<a
  href="https://www.instagram.com/jskphotography.ba"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center justify-center gap-2 text-lg font-medium bg-gradient-to-r from-[#E1306C] to-gray-200 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
>
  <FaInstagram className="w-5 h-5 text-[#E1306C]" />
  @jskphotography.ba
</a>


    </section>
  );
}
