import banner from "../../assets/banner.jpg";
import Container from "../layouts/Container";

const Banner = () => {
  return (
    <section
      className={`pt-72 pb-36 bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container>
        <div className="bg-[#FFF3E3] w-[643px] ml-auto py-16 px-11 rounded-xl text-textPrimary">
          <h4 className="font-semibold text-base">New Arrival</h4>
          <h1 className="font-bold text-[52px] text-textSecondary w-[400px]">Discover Our New Collection</h1>
          <p className="text-lg font-medium mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <a href="http://" className="bg-textSecondary font-bold text-base text-white py-6 px-[75px]">BUY Now</a>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
