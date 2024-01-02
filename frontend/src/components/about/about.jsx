import "./about.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="container-sections">
          <section className="section">
            <h2>Mission</h2>
            <p>
              Our mission is to provide a platform where enthusiasts can
              discover, learn, and share their passion for the world of
              cocktails and spirits. We strive to offer a variety of alcoholic
              beverages, each carefully selected for its quality and
              versatility. Our goal is to inspire and educate our visitors,
              allowing them to create and enjoy the best beverages in the world.
            </p>
          </section>
          <section className="section">
            <h2>Vision</h2>
            <p>
              Our vision is to be recognized as the leader in the cocktail
              community, providing detailed and accessible information for those
              seeking to expand their knowledge and skills. We aspire to be a
              reliable source of inspiration and education, and we hope that our
              recipes and advice will help our visitors enhance their skills and
              enjoy their time behind the bar even more.
            </p>
          </section>
        </div>
        <section className="container-thanks">
          <h2>Acknowledgements</h2>
          <p>
            We would like to express our deep gratitude to everyone who has
            contributed to making our page what it is today. Thank you to our
            visitors for their constant support and appreciation of our work. We
            also thank our collaborators and all the people who have worked
            tirelessly to realize our vision. Together, we are making the world
            of cocktails a better place.
          </p>
        </section>
        <section>
          <h2>Copyright</h2>
          <p>
            All intellectual property rights and databases on our site, and in
            the materials published on it by us, including, among others, trade
            marks, designs, logos, text, images, audio-visual materials,
            appearance and software, including the code, interface and structure
            of the website ("materials"), are owned by us and our affiliates,
            and/or any of our partners. The materials are protected worldwide
            under copyright laws and treaties. All these rights are reserved.
            Any copyright or other proprietary notices on the materials on our
            site cannot be erased or altered.
          </p>
        </section>
        <section className="section">
          <h2>Contact</h2>
          For any queries or additional information, please feel free to reach
          out to us through the following means:
          <ul>
            <li>Email Address: info@ourwebsite.com</li>
            <li>Phone Number: +XX XXX XXXXXX</li>
            <li>
              Physical Address: Example Street, City, State, ZIP Code, Country{" "}
            </li>
          </ul>
          We are committed to responding to all inquiries and ensuring a
          positive experience on our site.
        </section>
      </div>
    </>
  );
}
export default About;
